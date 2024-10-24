interface TagProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'technology' | 'difficulty';
  }
  
  export function Tag({ label, variant = 'primary' }: TagProps) {
    const variantStyles = {
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-200 text-gray-700',
      technology: 'bg-transparent font-semibold',
      difficulty: 'bg-green-200 text-green-800'
    };
  
    return (
      <span className={`px-4 py-2 rounded-full text-sm ${variantStyles[variant]}`}>
        {label}
      </span>
    );
  }
  