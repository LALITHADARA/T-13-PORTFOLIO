import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'focus:ring-purple-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-purple-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "View work",
  text_font_size = "text-sm",
  text_font_family = "Work Sans",
  text_font_weight = "font-normal",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_text_transform = "uppercase",
  text_color = "text-primary-text",
  border_border = "1px solid #e3e4e68c",
  border_border_radius = "rounded-lg",
  
  // Optional parameters (no defaults)
  fill_background,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBackground = fill_background && typeof fill_background === 'string' && fill_background?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidBackground ? `bg-[${fill_background}]` : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build required styles
  const requiredClasses = [
    text_font_size,
    text_font_weight,
    text_line_height,
    text_color,
    border_border_radius,
    text_text_transform,
    `text-${text_text_align}`,
    `font-[${text_font_family}]`,
    `border-[${border_border}]`,
  ]?.filter(Boolean)?.join(' ');

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        buttonClasses({ variant, size }),
        requiredClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;