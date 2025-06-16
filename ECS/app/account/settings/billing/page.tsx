'use client'

import { CreditCard, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

const paymentMethods = [
  {
    id: 1,
    last4: '4242',
    expiry: '04/24',
    type: 'Visa',
  }
]

const billingHistory = [
  {
    id: 1,
    date: 'Mar 25, 2024',
    amount: '$29.99',
    status: 'Paid',
    invoice: '#INV-2024-001',
  },
  {
    id: 2,
    date: 'Feb 25, 2024',
    amount: '$29.99',
    status: 'Paid',
    invoice: '#INV-2024-002',
  }
]

export default function BillingSettings() {
  return (
    <div className="space-y-8">
      {/* Payment Methods */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Payment Methods</h2>
          <Button className="bg-[#3dcbb1] hover:bg-[#35b69e]">
            <Plus className="w-4 h-4 mr-2" />
            Add New Card
          </Button>
        </div>
        
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="font-medium">{method.type} •••• {method.last4}</p>
                  <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                </div>
              </div>
              <Button variant="outline">Remove</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl border p-6">
        <h2 className="text-xl font-semibold mb-6">Billing History</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">{item.amount}</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="link" className="text-[#3dcbb1] hover:text-[#35b69e] p-0">
                      {item.invoice}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
