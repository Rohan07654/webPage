interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
  }
  
  export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
    return (
      <button
        className={`w-full px-6 py-3 rounded-lg transition-colors duration-200 ${
          variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        {...props}
      >
        {children}
      </button>
    );
  }