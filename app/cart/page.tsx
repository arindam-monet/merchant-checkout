import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Heart, Calendar } from 'lucide-react'

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6 pb-20"> {/* Added pb-20 for bottom padding */}
        <h1 className="text-2xl font-bold mb-6">Your Trolley</h1>
        
        <div className="space-y-6">
          {/* Product Card */}
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt="FINERY Kimmy Dress 22"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="font-medium">FINERY Kimmy Dress 22</h3>
                <p className="text-sm text-gray-500">tue145514061</p>
                
                <div className="space-y-2">
                  <button className="text-blue-600 text-sm hover:underline">
                    Change colour/size
                  </button>
                  
                  <button className="flex items-center text-sm text-gray-600 hover:text-red-600">
                    <Heart className="h-4 w-4 mr-1" />
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center space-x-4">
                <Select defaultValue="1">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
                
                <button className="text-blue-600 text-sm hover:underline">
                  Remove
                </button>
              </div>
              
              <div className="text-xl font-bold">
                £24.50
              </div>
            </div>
            
            <div className="flex items-start gap-2 pt-2 border-t text-sm text-gray-600">
              <Calendar className="h-4 w-4 mt-0.5" />
              <p>Order now, collect from Tuesday 31 December</p>
            </div>
          </div>
          
          {/* Add bottom padding to prevent overlap with sticky footer */}
          <div className="h-20" />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
