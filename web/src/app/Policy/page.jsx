const PolicyPage = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-black mt-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Website Policies</h1>
  
          {/* Table of Contents */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#shipping" className="text-blue-600 hover:underline">Shipping Policy</a></li>
              <li><a href="#returns" className="text-blue-600 hover:underline">Return & Refund Policy</a></li>
              <li><a href="#warranty" className="text-blue-600 hover:underline">Warranty Information</a></li>
              <li><a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="text-blue-600 hover:underline">Terms of Service</a></li>
            </ul>
          </div>
  
          {/* Shipping Policy */}
          <section id="shipping" className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <div className="space-y-4">
              <p>We offer worldwide shipping through trusted carriers. Please review our shipping guidelines:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days (additional charges apply)</li>
                <li>Oversized parts may require special handling</li>
                <li>Tracking information provided for all orders</li>
                <li>Shipping costs are non-refundable</li>
              </ul>
              <p className="text-sm text-gray-600">Contact us at <a href="mailto:shipping@autoparts.com" className="text-blue-600">shipping@autoparts.com</a> for shipping inquiries</p>
            </div>
          </section>
  
          {/* Return Policy */}
          <section id="returns" className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Return & Refund Policy</h2>
            <div className="space-y-4">
              <p>We accept returns within 30 days of purchase:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Items must be unused and in original packaging</li>
                <li>Return shipping costs are customer's responsibility</li>
                <li>Refunds processed within 5-7 business days</li>
                <li>Special order parts are non-returnable</li>
                <li>Damaged items must be reported within 48 hours</li>
              </ul>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">⚠️ Installation-related returns require technical inspection</p>
              </div>
            </div>
          </section>
  
          {/* Warranty Information */}
          <section id="warranty" className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Warranty Information</h2>
            <div className="space-y-4">
              <p>Manufacturer warranties vary by product:</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">Product Type</th>
                      <th className="px-4 py-3 text-left">Warranty Period</th>
                      <th className="px-4 py-3 text-left">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3">Engine Components</td>
                      <td className="px-4 py-3">2 Years</td>
                      <td className="px-4 py-3">Manufacturing defects</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3">Electrical Parts</td>
                      <td className="px-4 py-3">1 Year</td>
                      <td className="px-4 py-3">Non-working parts</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3">Accessories</td>
                      <td className="px-4 py-3">6 Months</td>
                      <td className="px-4 py-3">Material defects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">Warranty void if installed improperly or modified</p>
            </div>
          </section>
  
          {/* Privacy Policy */}
          <section id="privacy" className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <div className="space-y-4">
              <p>We are committed to protecting your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We collect only necessary personal data</li>
                <li>Payment information is processed securely</li>
                <li>We don't sell customer data to third parties</li>
                <li>Cookies are used to improve user experience</li>
                <li>GDPR-compliant data handling</li>
              </ul>
              <p className="text-sm text-gray-600">Full privacy policy available upon request</p>
            </div>
          </section>
  
          {/* Terms of Service */}
          <section id="terms" className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <div className="space-y-4">
              <p>By using our website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate vehicle information</li>
                <li>Verify part compatibility before purchase</li>
                <li>Use products as intended by manufacturer</li>
                <li>Comply with all local automotive regulations</li>
                <li>Assume responsibility for proper installation</li>
              </ul>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-800">🚫 We are not liable for installation damages or vehicle modifications</p>
              </div>
            </div>
          </section>
  
          <div className="text-center text-sm text-gray-500 mt-8">
            <p>Last updated: March 2025</p>
            <p>Policies subject to change without notice</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PolicyPage;