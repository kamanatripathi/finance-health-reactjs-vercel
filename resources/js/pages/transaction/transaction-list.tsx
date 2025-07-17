import React from 'react'

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
// import Image from "next/image";

export default function TransactionList() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="group flex gap-4 items-center bg-card border rounded-lg p-2 "
          >
            {/* Product Image */}
            <div className="relative h-24 aspect-square bg-muted rounded-md overflow-hidden shrink-0">
              {/* <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 96px"
              /> */}
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0 grid sm:grid-cols-2 gap-4 items-center">
              <div className="min-w-0">
                <h3 className="font-medium truncate">Fresh Food Market</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-sm">Groceries</span>
                </div>
              </div>


              <div className="flex items-center gap-2 sm:justify-end">
              <div className="font-medium">$299</div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
