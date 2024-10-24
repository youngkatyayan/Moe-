// src/App.jsx
import React from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Sun, Leaf, Battery, ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">MOE</div>
        <div className="hidden md:flex gap-6">
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">How it Works</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Power Your Balcony,<br />
              <span className="text-green-600">Power Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your balcony into a personal power plant with MOE's innovative solar solution. 
              Easy to install, efficient to use, and designed for urban living.
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700 px-8">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-green-100 rounded-full absolute -z-10 blur-3xl opacity-30" />
            <img 
              src="/api/placeholder/600/600" 
              alt="MOE Balcony Power Plant" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MOE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Sun className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solar Efficiency</h3>
              <p className="text-gray-600">
                Advanced photovoltaic technology ensures maximum power generation even in partial sunlight.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint while saving on energy costs with clean, renewable power.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Battery className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Storage</h3>
              <p className="text-gray-600">
                Built-in battery system stores excess energy for use when you need it most.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Generate Your Own Power?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their balconies into sustainable power sources.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100">
            Get Your MOE Today
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
