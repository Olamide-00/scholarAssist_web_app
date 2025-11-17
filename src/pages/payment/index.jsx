// src/pages/payment/index.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, Bitcoin, Building2, Wallet, CheckCircle, ArrowLeft, Shield, Lock, Zap, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/layout/nav.jsx';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [copiedAddress, setCopiedAddress] = useState('');

  useEffect(() => {
    const details = location.state?.orderDetails || {
      serviceType: 'Academic Writing',
      academicLevel: 'PhD/Doctoral',
      wordCount: 2500,
      deadline: '2024-02-20',
      totalAmount: 875,
      topic: 'Machine Learning in Healthcare'
    };
    setOrderDetails(details);
  }, [location.state]);

  const paymentMethods = [
    { id: 'bank-transfer', name: 'Bank Transfer', icon: <Building2 size={24} />, description: 'Direct bank transfer', processingTime: '1–2 business days', fee: 'No fees', status: 'active' },
    { id: 'paypal', name: 'PayPal', icon: <Wallet size={24} />, description: 'PayPal balance or bank', processingTime: 'Instant', fee: '2.9% + £0.30', status: 'active' },
    { id: 'wise', name: 'Wise Transfer', icon: <CreditCard size={24} />, description: 'International transfer', processingTime: '1 business day', fee: 'Low fees', status: 'active' },
    { id: 'crypto', name: 'Crypto', icon: <CreditCard size={24} />, description: 'Crypto payment', processingTime: 'instantly', fee: 'zero', status: 'active' }
  ];

  const cryptoAddresses = {
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    ethereum: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    usdt: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
  };

  const bankDetails = {
    accountName: 'ResearchHQ Writing Services',
    accountNumber: '12345678',
    sortCode: '04-00-75',
    iban: 'GB29NWBK60161331926819',
    bic: 'NWBKGB2L'
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(type);
    setTimeout(() => setCopiedAddress(''), 2000);
  };

  const handlePaymentMethodSelect = (methodId) => setSelectedMethod(methodId);

  const proceedToPayment = () => {
    alert(`Processing ${selectedMethod} payment...`);
    setTimeout(() => navigate('/', { replace: true }), 2000);
  };

  if (!orderDetails) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-slate-900 flex items-center justify-center pt-20">
          <div className="text-white text-xl">Loading order details...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen mt-10 bg-slate-900 py-12 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <button onClick={() => navigate('/order')} className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Order
            </button>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <Lock size={16} className="text-green-400" />
              <span className="text-green-400 text-sm font-semibold">Secure Payment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Your Payment</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Choose your preferred payment method to start your project</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white font-medium">{orderDetails.serviceType}</span>
                  </div>
                  {orderDetails.academicLevel && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Academic Level:</span>
                      <span className="text-white font-medium">{orderDetails.academicLevel}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Word Count:</span>
                    <span className="text-white font-medium">{orderDetails.wordCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Deadline:</span>
                    <span className="text-white font-medium">{new Date(orderDetails.deadline).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-gray-400">Total Amount:</span>
                      <span className="text-cyan-400 font-bold text-xl">£{orderDetails.totalAmount}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Shield size={16} />
                    <span>Secure & Encrypted</span>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• 256-bit SSL encryption</li>
                    <li>• PCI DSS compliant</li>
                    <li>• Money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Select Payment Method</h2>
                <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => (
                    <motion.div key={method.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <button onClick={() => handlePaymentMethodSelect(method.id)}
                        className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                          selectedMethod === method.id ? 'border-purple-500 bg-purple-500/10' : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${selectedMethod === method.id ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-600/50 text-gray-400'}`}>
                              {method.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{method.name}</div>
                              <div className="text-gray-400 text-sm">{method.description}</div>
                            </div>
                          </div>
                          {selectedMethod === method.id && <CheckCircle className="text-green-400" size={20} />}
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                          <span>⏱️ {method.processingTime}</span>
                          <span>💰 {method.fee}</span>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                {selectedMethod && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.5 }}
                    className="border-t border-slate-700 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {selectedMethod === "bank-transfer" && "Bank Transfer Details"}
                      {selectedMethod === "crypto" && "Cryptocurrency Payment"}
                      {selectedMethod === "paypal" && "PayPal Payment"}
                      {selectedMethod === "wise" && "Wise Transfer"}
                    </h3>

                    {selectedMethod === "bank-transfer" && (
                      <>
                        <div className="bg-slate-700/50 rounded-lg p-4 space-y-3">
                          {Object.entries(bankDetails).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                              <span className="text-white font-mono">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-4 mt-4">
                          <p className="text-amber-400 text-sm">💡 Please include your order reference in the transfer description.</p>
                        </div>
                      </>
                    )}

                    {selectedMethod === "crypto" && (
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(cryptoAddresses).map(([coin, address]) => (
                          <div key={coin} className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                            <div className="flex items-center gap-2 text-white font-semibold">
                              <Bitcoin size={18} className="text-orange-400" />
                              {coin.toUpperCase()}
                            </div>
                            <div className="flex items-center gap-2">
                              <code className="text-white text-xs font-mono bg-slate-800/50 px-2 py-1 rounded flex-1 truncate">{address}</code>
                              <button onClick={() => copyToClipboard(address, coin)} className="text-cyan-400">
                                {copiedAddress === coin ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedMethod === "paypal" && (
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                        <Wallet size={24} className="text-blue-400 mx-auto mb-4" />
                        <p className="text-white mb-4">You will be redirected to PayPal to complete your payment.</p>
                      </div>
                    )}

                    {selectedMethod === "wise" && (
                      <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                        <CreditCard size={24} className="text-green-400 mx-auto mb-4" />
                        <p className="text-white mb-4">You will be redirected to Wise to complete your transfer.</p>
                      </div>
                    )}

                    <button onClick={proceedToPayment}
                      className="w-full mt-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-green-700 hover:to-emerald-700 transition-all">
                      <Zap size={20} />
                      {selectedMethod === "bank-transfer" && "I have sent the payment"}
                      {selectedMethod === "crypto" && "I have sent the crypto"}
                      {selectedMethod === "paypal" && "Proceed to PayPal"}
                      {selectedMethod === "wise" && "Proceed to Wise"}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;