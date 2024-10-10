

import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
import Button from '@mui/material/Button';
import { AiOutlineCamera } from 'react-icons/ai';

const BarcodeScanner = ({ addToCart, cart, setCart }) => {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState({ name: 'Unknown Product', price: 0.0 });
  const [scannedBarcodes, setScannedBarcodes] = useState(new Set());
  const [scanning, setScanning] = useState(false);
  const [viewingCart, setViewingCart] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity input
  const [showQuantityInput, setShowQuantityInput] = useState(false); // State to show/hide quantity input

  useEffect(() => {
    if (scanning) {
      Quagga.init({
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment'
          },
          target: document.querySelector('#cameraFeed')
        },
        decoder: {
          readers: ['ean_reader', 'code_128_reader']
        }
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Barcode scanner initialized');
        Quagga.start();
      });

      Quagga.onDetected((data) => {
        const detectedBarcode = data.codeResult.code;

        // Check if this barcode has already been scanned
        if (!scannedBarcodes.has(detectedBarcode)) {
          setBarcode(detectedBarcode);
          const productInfo = lookupProduct(detectedBarcode);
          
          if (productInfo.name !== 'Unknown Product') {
            setProduct(productInfo);
            setShowQuantityInput(true); // Show quantity input if product found
            setScannedBarcodes((prev) => new Set(prev).add(detectedBarcode));
          } else {
            setShowQuantityInput(false); // Hide input for unknown products
          }
        }
      });

      return () => {
        Quagga.stop();
        Quagga.offDetected();
      };
    }
  }, [scanning, scannedBarcodes]);

  const lookupProduct = (barcode) => {
    const products = {
      '8904004403800': { name: 'Haldiram Moong dal 400g', price: 105.0 },
      '8901526204458': { name: 'Garnier Color Natural Black 70ml+60g', price: 220.0 },
      '8904109400414': { name: 'Patanjali Coconut Oil 200ml', price: 70.0 },
      '8901030876981': { name: 'Red label 500g', price: 300.0 },
      '8908000244016': { name: 'Anoos Henna 100g', price: 85.0 }
    };

    return products[barcode] || { name: 'Unknown Product', price: 0.0 };
  };

  const startScanning = () => setScanning(true);

  const stopScanning = () => {
    Quagga.stop(); // Stop the scanner
    setScanning(false); // Update the state
    setScannedBarcodes(new Set()); // Clear scanned barcodes if needed
    setShowQuantityInput(false); // Hide quantity input on stop
  };

  const handleAddToCart = () => {
    if (product.name !== 'Unknown Product') {
      const totalPrice = product.price * quantity; // Calculate total price based on quantity
      addToCart({ ...product, quantity, totalPrice, barcode }); // Add product with selected quantity and total price
      setShowQuantityInput(false); // Hide input after adding
      setQuantity(1); // Reset quantity to default after adding to cart
      setProduct({ name: 'Unknown Product', price: 0.0 }); // Reset product after adding to cart
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const removeFromCart = (index) => {
    const itemToRemove = cart[index]; // Get the item being removed
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      return updatedCart;
    });
    // Remove the barcode from the scannedBarcodes state
    setScannedBarcodes((prev) => {
      const updatedScanned = new Set(prev);
      updatedScanned.delete(itemToRemove.barcode); // Assuming you add barcode to each cart item
      return updatedScanned;
    });
  };

  return (
    <div className="scanner-container" style={{ textAlign: 'center', margin: '20px' }}>
      <Button
        onClick={startScanning}
        variant="contained"
        color="primary"
        startIcon={<AiOutlineCamera />}
        style={{ marginBottom: '20px' }}
      >
        Scan Something
      </Button>

      {scanning && (
        <>
          <div id="cameraFeed" style={{ width: '100%', height: '480px', border: '1px solid #ddd', marginBottom: '20px' }}></div>
          <Button
            onClick={stopScanning}
            variant="contained"
            color="secondary"
            style={{ marginBottom: '20px' }}
          >
            Stop Scanning
          </Button>
        </>
      )}

      {/* Display Product Details Below Camera Feed */}
      <div className="summary" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>{scannedBarcodes.size} items scanned</h3>
        {product.name === 'Unknown Product' && (
          <h3>Unknown Product</h3>
        )}
        {product.name !== 'Unknown Product' && (
          <>
            <h3>Product Name: {product.name}</h3>
            <h3>Product Price: ₹{product.price.toFixed(2)}</h3>
            {showQuantityInput && (
              <div>
                <h4>Select Quantity:</h4>
                <Button onClick={decreaseQuantity}>-</Button>
                <span>{quantity}</span>
                <Button onClick={increaseQuantity}>+</Button>
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '10px' }}
                >
                  Add to Cart
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <Button
        onClick={() => setViewingCart((prev) => !prev)}
        variant="contained"
        color="secondary"
      >
        {viewingCart ? 'Hide Cart' : 'View Cart'}
      </Button>

      {/* Conditional Rendering of Cart Below Scanned Product Details */}
      {viewingCart && (
        <div className="cartView" style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #ddd' }}>Product</th>
                  <th style={{ borderBottom: '1px solid #ddd' }}>Price</th>
                  <th style={{ borderBottom: '1px solid #ddd' }}>Quantity</th>
                  <th style={{ borderBottom: '1px solid #ddd' }}>Total Price</th>
                  <th style={{ borderBottom: '1px solid #ddd' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td style={{ borderBottom: '1px solid #ddd' }}>{item.name}</td>
                    <td style={{ borderBottom: '1px solid #ddd' }}>₹{item.price.toFixed(2)}</td>
                    <td style={{ borderBottom: '1px solid #ddd' }}>{item.quantity}</td>
                    <td style={{ borderBottom: '1px solid #ddd' }}>₹{(item.price * item.quantity).toFixed(2)}</td> {/* Display total price */}
                    <td style={{ borderBottom: '1px solid #ddd' }}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
