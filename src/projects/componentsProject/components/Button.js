import className from "classnames";

function Button({
    children, 
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded, 
    outline,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-blue-500 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
        'bg-white': outline
    })

    return (
      <button className={classes} {...rest}>{children}</button>
    );
  }

  Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger);

        if(count > 1) return new Error('You fucked up the button props. Only one prop can be true.')
    }
  };
  
  export default Button;
   