import React from "react";
import { ProductData } from "../types";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: ProductData;
  isReversed?: boolean;
}

const themeStyles: Record<
  string,
  { badge: string; border: string; iconBg: string; highlightText: string }
> = {
  blue: {
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
    highlightText: "text-blue-700",
  },
  purple: {
    badge: "bg-purple-100 text-purple-800",
    border: "border-purple-500",
    iconBg: "bg-purple-50 text-purple-600",
    highlightText: "text-purple-700",
  },
  green: {
    badge: "bg-green-100 text-green-800",
    border: "border-green-500",
    iconBg: "bg-green-50 text-green-600",
    highlightText: "text-green-700",
  },
  red: {
    badge: "bg-red-100 text-red-800",
    border: "border-red-500",
    iconBg: "bg-red-50 text-red-600",
    highlightText: "text-red-700",
  },
};

const ProductCard: React.FC<ProductCardProps> = (
  { product, isReversed = false },
) => {
  const theme = themeStyles[product.colorTheme] || themeStyles.blue;

  return (
    <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-16`}
      >
        {/* Image Section */}
        <div className="flex-1 w-full relative group">
          <div
            className={`absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent opacity-50 rounded-3xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500`}
          >
          </div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-8 border border-slate-100">
            <div className="aspect-[4/3] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-8">
          <div>
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4 ${theme.badge}`}
            >
              {product.id.toUpperCase()}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              {product.name}
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              {product.tagline}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className={`p-2.5 rounded-full shrink-0 ${theme.iconBg}`}>
                  <spec.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    {spec.label}
                  </p>
                  <p
                    className={`font-medium text-base ${
                      spec.highlight ? theme.highlightText : "text-slate-700"
                    }`}
                  >
                    {spec.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Box */}
          <div
            className={`mt-6 bg-white border-l-4 ${theme.border} shadow-sm rounded-r-xl p-6`}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              {product.featureTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-600 text-sm font-medium border border-slate-200"
                >
                  <feature.icon size={14} className={theme.highlightText} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
