import React, { useState } from 'react';
import { Clock, Leaf, AlertTriangle, Plus, Minus, ShoppingCart, Edit, Trash2 } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  prepTime: string;
  servingSize: string;
  ingredients: string[];
  allergens: string[];
  nutrition: {
    calories: number;
    caffeine?: string;
    fat: string;
    sugar: string;
  };
  origin?: string;
  intensity?: number;
  brewingMethod?: string;
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Signature Espresso",
      price: 450,
      image: "https://images.pexels.com/photos/33144563/pexels-photo-33144563.jpeg",
      category: "Hot Coffee",
      description: "Rich, bold espresso shot with perfect crema",
      prepTime: "2-3 min",
      servingSize: "30ml",
      ingredients: ["Premium Arabica beans", "Filtered water"],
      allergens: ["None"],
      nutrition: { calories: 5, caffeine: "63mg", fat: "0g", sugar: "0g" },
      origin: "Colombian Highlands",
      intensity: 5,
      brewingMethod: "Espresso machine extraction at 9 bars pressure"
    },
    {
      id: 2,
      name: "Vanilla Latte",
      price: 650,
      image: "https://images.pexels.com/photos/5947094/pexels-photo-5947094.jpeg",
      category: "Hot Coffee",
      description: "Smooth espresso with steamed milk and vanilla syrup",
      prepTime: "4-5 min",
      servingSize: "240ml",
      ingredients: ["Espresso", "Steamed milk", "Vanilla syrup", "Milk foam"],
      allergens: ["Dairy"],
      nutrition: { calories: 190, caffeine: "75mg", fat: "7g", sugar: "18g" },
      origin: "Ethiopian beans",
      intensity: 3,
      brewingMethod: "Espresso with steamed milk at 65°C"
    },
    {
      id: 3,
      name: "Caramel Macchiato",
      price: 750,
      image: "https://images.pexels.com/photos/17506133/pexels-photo-17506133.jpeg",
      category: "Hot Coffee",
      description: "Espresso marked with steamed milk and caramel drizzle",
      prepTime: "5-6 min",
      servingSize: "355ml",
      ingredients: ["Espresso", "Steamed milk", "Caramel syrup", "Caramel drizzle"],
      allergens: ["Dairy"],
      nutrition: { calories: 240, caffeine: "75mg", fat: "7g", sugar: "32g" },
      origin: "Brazilian Santos",
      intensity: 3,
      brewingMethod: "Layered espresso with vanilla-flavored steamed milk"
    },
    {
      id: 4,
      name: "Classic Cappuccino",
      price: 550,
      image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
      category: "Hot Coffee",
      description: "Perfect balance of espresso, steamed milk, and foam",
      prepTime: "3-4 min",
      servingSize: "180ml",
      ingredients: ["Espresso", "Steamed milk", "Milk foam"],
      allergens: ["Dairy"],
      nutrition: { calories: 80, caffeine: "75mg", fat: "4g", sugar: "6g" },
      origin: "Italian blend",
      intensity: 4,
      brewingMethod: "Equal parts espresso, steamed milk, and foam"
    },
    {
      id: 5,
      name: "Americano",
      price: 400,
      image: "https://images.pexels.com/photos/5211576/pexels-photo-5211576.jpeg",
      category: "Hot Coffee",
      description: "Espresso shots diluted with hot water",
      prepTime: "2-3 min",
      servingSize: "240ml",
      ingredients: ["Espresso", "Hot water"],
      allergens: ["None"],
      nutrition: { calories: 10, caffeine: "150mg", fat: "0g", sugar: "0g" },
      origin: "Central American blend",
      intensity: 4,
      brewingMethod: "Double espresso shot with hot water"
    },
    {
      id: 6,
      name: "Mocha Delight",
      price: 700,
      image: "https://images.pexels.com/photos/13735931/pexels-photo-13735931.jpeg",
      category: "Hot Coffee",
      description: "Rich espresso with chocolate syrup and steamed milk",
      prepTime: "4-5 min",
      servingSize: "355ml",
      ingredients: ["Espresso", "Chocolate syrup", "Steamed milk", "Whipped cream"],
      allergens: ["Dairy"],
      nutrition: { calories: 290, caffeine: "95mg", fat: "11g", sugar: "35g" },
      origin: "Guatemalan Antigua",
      intensity: 3,
      brewingMethod: "Espresso with chocolate and steamed milk"
    },
    {
      id: 7,
      name: "Turkish Coffee",
      price: 500,
      image: "https://images.pexels.com/photos/33160394/pexels-photo-33160394.jpeg",
      category: "Hot Coffee",
      description: "Traditional finely ground coffee brewed in copper pot",
      prepTime: "8-10 min",
      servingSize: "60ml",
      ingredients: ["Finely ground coffee", "Water", "Sugar (optional)"],
      allergens: ["None"],
      nutrition: { calories: 20, caffeine: "50mg", fat: "0g", sugar: "0g" },
      origin: "Turkish blend",
      intensity: 5,
      brewingMethod: "Slow-brewed in traditional cezve with fine grounds"
    },
    {
      id: 8,
      name: "Iced Coffee",
      price: 500,
      image: "https://images.pexels.com/photos/3636959/pexels-photo-3636959.jpeg",
      category: "Cold Coffee",
      description: "Chilled coffee served over ice with milk",
      prepTime: "3-4 min",
      servingSize: "355ml",
      ingredients: ["Cold brew coffee", "Ice", "Milk", "Simple syrup"],
      allergens: ["Dairy"],
      nutrition: { calories: 60, caffeine: "165mg", fat: "2g", sugar: "8g" },
      origin: "Colombian cold brew",
      intensity: 3,
      brewingMethod: "Cold brew concentrate over ice with milk"
    },
    {
      id: 9,
      name: "Iced Caramel Latte",
      price: 650,
      image: "https://images.pexels.com/photos/10540797/pexels-photo-10540797.jpeg",
      category: "Cold Coffee",
      description: "Iced espresso with milk and caramel syrup",
      prepTime: "4-5 min",
      servingSize: "473ml",
      ingredients: ["Espresso", "Cold milk", "Caramel syrup", "Ice"],
      allergens: ["Dairy"],
      nutrition: { calories: 200, caffeine: "150mg", fat: "6g", sugar: "28g" },
      origin: "Brazilian Santos",
      intensity: 3,
      brewingMethod: "Espresso shots over ice with cold milk and caramel"
    },
    {
      id: 10,
      name: "Frappuccino",
      price: 750,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
      category: "Cold Coffee",
      description: "Blended iced coffee with whipped cream",
      prepTime: "5-6 min",
      servingSize: "473ml",
      ingredients: ["Coffee", "Milk", "Ice", "Sugar", "Whipped cream"],
      allergens: ["Dairy"],
      nutrition: { calories: 240, caffeine: "95mg", fat: "9g", sugar: "32g" },
      origin: "House blend",
      intensity: 2,
      brewingMethod: "Blended coffee with ice and milk, topped with whipped cream"
    },
    {
      id: 11,
      name: "Cold Brew Float",
      price: 600,
      image: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg",
      category: "Cold Coffee",
      description: "Cold brew coffee with vanilla ice cream float",
      prepTime: "3-4 min",
      servingSize: "355ml",
      ingredients: ["Cold brew coffee", "Vanilla ice cream", "Ice"],
      allergens: ["Dairy", "Eggs"],
      nutrition: { calories: 180, caffeine: "200mg", fat: "8g", sugar: "18g" },
      origin: "Ethiopian cold brew",
      intensity: 4,
      brewingMethod: "Cold brew concentrate with vanilla ice cream float"
    }
  ]);

  const categories = ['All', 'Hot Coffee', 'Cold Coffee'];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const updateQuantity = (id: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change)
    }));
  };

  const addToOrder = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    alert(`Added ${quantity}x ${item.name} to order! Total: Rs. ${item.price * quantity}`);
  };

  const deleteItem = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const addNewItem = () => {
    const newItem: MenuItem = {
      id: Date.now(),
      name: "New Coffee Item",
      price: 500,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
      category: "Hot Coffee",
      description: "New coffee description",
      prepTime: "3-4 min",
      servingSize: "240ml",
      ingredients: ["Coffee beans", "Water"],
      allergens: ["None"],
      nutrition: { calories: 50, caffeine: "80mg", fat: "0g", sugar: "0g" },
      origin: "New origin",
      intensity: 3,
      brewingMethod: "Standard brewing method"
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Coffee Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted coffee selection, from bold espressos to refreshing cold brews
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={addNewItem}
            className="px-6 py-3 rounded-full font-medium bg-green-600 text-white hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Item
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
                {item.intensity && (
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                      Intensity: {item.intensity}/5
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold">
                    Rs. {item.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Quick Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center text-xs">
                      S
                    </span>
                    <span>{item.servingSize}</span>
                  </div>
                </div>

                {/* Order Controls */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium min-w-[20px] text-center">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => addToOrder(item)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Order
                  </button>
                </div>

                {/* View Details Toggle */}
                <button
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="w-full text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  {expandedItem === item.id ? 'Hide Details' : 'View Details'}
                </button>

                {/* Expanded Details */}
                {expandedItem === item.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-in slide-in-from-top duration-300">
                    {item.origin && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Origin & Brewing</h4>
                        <p className="text-sm text-gray-600">{item.origin}</p>
                        {item.brewingMethod && (
                          <p className="text-sm text-gray-600 mt-1">{item.brewingMethod}</p>
                        )}
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-600" />
                        Ingredients
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Nutrition</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Calories: {item.nutrition.calories}</div>
                          {item.nutrition.caffeine && <div>Caffeine: {item.nutrition.caffeine}</div>}
                          <div>Fat: {item.nutrition.fat}</div>
                          <div>Sugar: {item.nutrition.sugar}</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          Allergens
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {item.allergens.map((allergen, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 rounded text-xs ${
                                allergen === 'None'
                                  ? 'bg-green-50 text-green-700'
                                  : 'bg-orange-50 text-orange-700'
                              }`}
                            >
                              {allergen}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No coffee items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;