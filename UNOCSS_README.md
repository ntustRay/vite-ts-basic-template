# UnoCSS in Vite + React Project

This project uses [UnoCSS](https://github.com/unocss/unocss), an atomic CSS engine that provides utility-first CSS capabilities similar to Tailwind CSS but with more flexibility and better performance.

## Setup

UnoCSS has been set up in this project with the following presets:
- `presetUno()` - provides Tailwind/Windi CSS compatible utilities
- `presetAttributify()` - enables attributify mode for writing utilities as attributes (e.g., `<div bg="blue-500">`)
- `presetIcons()` - allows using any icon from iconify with the `i-` prefix

## Usage

### Basic Usage

You can use UnoCSS utility classes directly in your components:

```jsx
<div className="p-4 m-4 bg-blue-100 rounded shadow-md">
  <h1 className="text-2xl font-bold text-blue-500">Hello UnoCSS</h1>
</div>
```

### Icon Usage

The icon preset allows you to use any icon from Iconify:

```jsx
<div className="i-carbon-add text-3xl text-blue-500"></div>
```

### Attributify Mode

With attributify mode, you can use attributes instead of classes for better readability:

```jsx
<div p="4" m="4" bg="blue-100" rounded shadow="md">
  <h1 text="2xl blue-500" font="bold">Hello UnoCSS</h1>
</div>
```

## Configuration

The UnoCSS configuration is in `uno.config.ts`. You can customize it by:

1. Adding custom rules
2. Adding shortcuts for common utility combinations
3. Adding themes and more presets

Example of adding a custom shortcut:

```ts
shortcuts: {
  'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  'btn-primary': 'btn bg-blue-500 text-white hover:bg-blue-700'
}
```

Then use it in your components:

```jsx
<button className="btn-primary">Click me</button>
```

## Documentation

For more information, refer to the official UnoCSS documentation:

- [UnoCSS Documentation](https://unocss.dev)
- [UnoCSS GitHub](https://github.com/unocss/unocss) 