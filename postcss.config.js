// PostCSS Configuration for CaseClosed Legal Technology Platform
// Optimized for Tailwind CSS, Christopher AI components, and legal compliance

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  plugins: [
    // Tailwind CSS - Core utility framework
    require('tailwindcss'),
    
    // Autoprefixer - Browser compatibility
    require('autoprefixer')({
      // Browser support for legal technology users
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'not ie <= 11',
        'not op_mini all',
        // Specific support for legal professionals
        'Chrome >= 88',
        'Firefox >= 85',
        'Safari >= 14',
        'Edge >= 88',
        // Mobile support for attorney mobile access
        'iOS >= 14',
        'Android >= 88',
      ],
      // Grid support for complex legal document layouts
      grid: 'autoplace',
      // Flexbox support for Christopher AI components
      flexbox: 'no-2009',
    }),
    
    // CSS Nano - Production optimization
    ...(isProduction ? [
      require('cssnano')({
        preset: [
          'default',
          {
            // Preserve important legal compliance comments
            discardComments: {
              removeAll: false,
              removeAllButFirst: false,
            },
            // Preserve Christopher AI specific selectors
            discardDuplicates: true,
            // Optimize for legal document rendering
            mergeLonghand: true,
            mergeRules: true,
            // Preserve Nevada-specific styling
            normalizeCharset: true,
            normalizeDisplayValues: true,
            normalizePositions: true,
            normalizeRepeatStyle: true,
            normalizeString: true,
            normalizeTimingFunctions: true,
            normalizeUnicode: true,
            normalizeUrl: true,
            normalizeWhitespace: true,
            // Preserve legal typography
            orderedValues: true,
            reduceIdents: false, // Preserve Christopher AI identifiers
            reduceInitial: true,
            reduceTransforms: true,
            // Preserve attorney-client privilege styling
            svgo: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // Preserve legal icons and Nevada symbols
                      removeViewBox: false,
                      cleanupIds: false,
                    },
                  },
                },
              ],
            },
            // Preserve Christopher AI animations
            uniqueSelectors: true,
            // Preserve legal compliance classes
            zindex: false,
          },
        ],
      }),
    ] : []),
    
    // PostCSS Import - Handle @import statements
    require('postcss-import')({
      // Path resolution for Christopher AI components
      path: [
        'src/styles',
        'src/components',
        'src/components/christopher',
        'src/components/legal',
        'src/components/nevada',
        'src/components/portal',
        'src/components/marketing',
        'src/components/ui',
        'src/components/auth',
        'node_modules',
      ],
      // Plugin resolution
      plugins: [
        // Resolve Christopher AI specific imports
        require('postcss-import-url')({
          modernBrowser: true,
        }),
      ],
    }),
    
    // PostCSS Nested - Handle nested CSS rules
    require('postcss-nested')({
      // Preserve Christopher AI nested structures
      bubble: [
        'screen',
        'hover',
        'focus',
        'focus-within',
        'active',
        'visited',
        'disabled',
        'christopher-active',
        'nevada-highlight',
        'legal-required',
      ],
      // Preserve legal component nesting
      preserveEmpty: true,
      // Unwrap nested rules for better performance
      unwrap: [
        'document',
        'supports',
        'layer',
      ],
    }),
    
    // PostCSS Custom Properties - CSS variables support
    require('postcss-custom-properties')({
      // Preserve Christopher AI CSS variables
      preserve: true,
      // Import custom properties from theme
      importFrom: [
        // Christopher AI theme variables
        {
          customProperties: {
            '--christopher-primary': '#cb9628',
            '--christopher-secondary': '#032440',
            '--christopher-accent': '#f59e0b',
            '--christopher-text': '#1f2937',
            '--christopher-background': '#ffffff',
            '--christopher-border': '#e5e7eb',
            '--christopher-shadow': '0 4px 12px rgba(203, 150, 40, 0.15)',
            '--christopher-radius': '0.75rem',
            '--christopher-transition': 'all 0.3s ease',
          },
        },
        // Nevada theme variables
        {
          customProperties: {
            '--nevada-blue': '#003f7f',
            '--nevada-silver': '#c0c0c0',
            '--nevada-gold': '#cb9628',
            '--nevada-navy': '#032440',
            '--nevada-gradient': 'linear-gradient(135deg, #003f7f 0%, #032440 100%)',
          },
        },
        // Legal theme variables
        {
          customProperties: {
            '--legal-primary': '#1f2937',
            '--legal-secondary': '#6b7280',
            '--legal-accent': '#cb9628',
            '--legal-success': '#10b981',
            '--legal-warning': '#f59e0b',
            '--legal-error': '#ef4444',
            '--legal-info': '#3b82f6',
            '--legal-compliant': '#10b981',
            '--legal-pending': '#f59e0b',
            '--legal-violation': '#ef4444',
            '--legal-typography': 'Georgia, Times New Roman, serif',
          },
        },
      ],
    }),
    
    // PostCSS Preset Env - Modern CSS features
    require('postcss-preset-env')({
      // Stage 1 features for legal technology
      stage: 1,
      // Enable modern CSS features
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true,
        'nesting-rules': true,
        'color-function': true,
        'hexadecimal-alpha-notation': true,
        'lab-function': true,
        'logical-properties-and-values': true,
        'place-properties': true,
        'gap-properties': true,
        'overflow-property': true,
        'prefers-color-scheme-query': true,
        'prefers-reduced-motion-query': true,
        'focus-visible-pseudo-class': true,
        'focus-within-pseudo-class': true,
        'any-link-pseudo-class': true,
        'case-insensitive-attributes': true,
        'dir-pseudo-class': true,
        'has-pseudo-class': true,
        'is-pseudo-class': true,
        'not-pseudo-class': true,
        'where-pseudo-class': true,
      },
      // Browser support
      browsers: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'not ie <= 11',
        // Legal professional browsers
        'Chrome >= 88',
        'Firefox >= 85',
        'Safari >= 14',
        'Edge >= 88',
      ],
      // Preserve unknown features for Christopher AI
      preserve: true,
    }),
    
    // Development-only plugins
    ...(isDevelopment ? [
      // PostCSS Reporter - Development feedback
      require('postcss-reporter')({
        // Clear console output
        clearReportedMessages: true,
        clearAllMessages: true,
        // Show only errors and warnings
        filter: (message) => {
          // Filter out Christopher AI component warnings
          if (message.text.includes('christopher-')) return false
          // Filter out Nevada-specific warnings
          if (message.text.includes('nevada-')) return false
          // Filter out legal component warnings
          if (message.text.includes('legal-')) return false
          return true
        },
        // Custom formatting for legal development
        formatter: (input) => {
          const messages = input.messages
          const source = input.source
          
          if (messages.length === 0) return ''
          
          let output = `\n📄 ${source}\n`
          
          messages.forEach((message) => {
            const severity = message.severity
            const icon = severity === 'error' ? '❌' : '⚠️'
            const location = message.line ? `:${message.line}:${message.column}` : ''
            
            output += `${icon} ${message.text} ${location}\n`
          })
          
          return output
        },
      }),
    ] : []),
    
    // PostCSS Color Function - Advanced color manipulation
    require('postcss-color-function')({
      // Preserve Christopher AI color functions
      preserve: false,
    }),
    
    // PostCSS Calc - Optimize calc() functions
    require('postcss-calc')({
      // Preserve legal document calculations
      preserve: true,
      // Precision for legal measurements
      precision: 5,
      // Warn about invalid calculations
      warnWhenCannotResolve: true,
    }),
    
    // PostCSS Flexbugs Fixes - Fix flexbox issues
    require('postcss-flexbugs-fixes'),
    
    // PostCSS Object Fit Images - Polyfill for older browsers
    require('postcss-object-fit-images'),
    
    // Production-only optimization plugins
    ...(isProduction ? [
      // PostCSS Sort Media Queries - Optimize media queries
      require('postcss-sort-media-queries')({
        // Sort order for responsive design
        sort: 'mobile-first',
      }),
      
      // PostCSS Combine Duplicated Selectors
      require('postcss-combine-duplicated-selectors')({
        // Remove duplicate Christopher AI selectors
        removeDuplicatedDeclarations: true,
        // Remove duplicate Nevada selectors
        removeDuplicatedValues: true,
      }),
      
      // PostCSS Merge Rules - Optimize CSS rules
      require('postcss-merge-rules')({
        // Preserve legal component specificity
        preserve: true,
      }),
      
      // PostCSS Discard Comments - Remove comments in production
      require('postcss-discard-comments')({
        // Preserve legal compliance comments
        removeAll: false,
        removeAllButFirst: false,
        // Preserve Christopher AI documentation
        remove: (comment) => {
          // Keep legal compliance comments
          if (comment.includes('legal-compliance')) return false
          // Keep Christopher AI comments
          if (comment.includes('christopher-ai')) return false
          // Keep Nevada-specific comments
          if (comment.includes('nevada-')) return false
          // Keep attorney-client privilege comments
          if (comment.includes('attorney-client')) return false
          // Remove other comments
          return true
        },
      }),
      
      // PostCSS Discard Empty - Remove empty rules
      require('postcss-discard-empty'),
      
      // PostCSS Normalize Whitespace - Optimize whitespace
      require('postcss-normalize-whitespace')({
        // Preserve legal document formatting
        exclude: [
          /legal-document/,
          /christopher-script/,
          /nevada-compliance/,
        ],
      }),
      
    ] : []),
    
    // PostCSS Custom Selectors - Custom selector support
    require('postcss-custom-selectors')({
      // Import custom selectors for Christopher AI
      importFrom: [
        {
          customSelectors: {
            // Christopher AI selectors
            ':--christopher-active': '.christopher-avatar:hover, .christopher-avatar:focus, .christopher-avatar.active',
            ':--christopher-disabled': '.christopher-avatar:disabled, .christopher-avatar.disabled',
            ':--christopher-loading': '.christopher-avatar.loading, .christopher-avatar[data-loading="true"]',
            
            // Nevada selectors
            ':--nevada-highlight': '.nevada-section:hover, .nevada-advantage:focus',
            ':--nevada-compliance': '.nevada-compliant, .nevada-verified',
            
            // Legal selectors
            ':--legal-required': '.legal-required, .required, [required]',
            ':--legal-compliant': '.legal-compliant, .compliant, [data-compliant="true"]',
            ':--legal-confidential': '.attorney-client-privilege, .confidential, [data-confidential="true"]',
            
            // Portal selectors
            ':--attorney-portal': '.attorney-dashboard, .attorney-portal',
            ':--client-portal': '.client-dashboard, .client-portal',
            
            // Form selectors
            ':--form-invalid': 'input:invalid, select:invalid, textarea:invalid',
            ':--form-valid': 'input:valid, select:valid, textarea:valid',
          },
        },
      ],
    }),
    
    // PostCSS Media Queries - Advanced media query support
    require('postcss-custom-media')({
      // Import custom media queries
      importFrom: [
        {
          customMedia: {
            // Christopher AI responsive breakpoints
            '--christopher-mobile': '(max-width: 599px)',
            '--christopher-tablet': '(min-width: 600px) and (max-width: 899px)',
            '--christopher-desktop': '(min-width: 900px)',
            
            // Nevada-specific breakpoints
            '--nevada-small': '(max-width: 640px)',
            '--nevada-medium': '(min-width: 641px) and (max-width: 1024px)',
            '--nevada-large': '(min-width: 1025px)',
            
            // Legal document breakpoints
            '--legal-print': 'print',
            '--legal-screen': 'screen',
            '--legal-mobile': '(max-width: 768px)',
            '--legal-desktop': '(min-width: 769px)',
            
            // Accessibility media queries
            '--reduced-motion': '(prefers-reduced-motion: reduce)',
            '--high-contrast': '(prefers-contrast: high)',
            '--dark-theme': '(prefers-color-scheme: dark)',
            '--light-theme': '(prefers-color-scheme: light)',
          },
        },
      ],
    }),
    
    // PostCSS Focus Visible - Focus management
    require('postcss-focus-visible'),
    
    // PostCSS Logical Properties - Logical properties support
    require('postcss-logical')({
      // Preserve existing properties
      preserve: true,
      // Direction for RTL support (future international expansion)
      dir: 'ltr',
    }),
    
    // PostCSS Lab Function - Advanced color support
    require('postcss-lab-function')({
      // Preserve original values
      preserve: true,
    }),
    
    // PostCSS Directory - Import entire directories
    require('postcss-import-ext-glob')({
      // Enable glob imports for Christopher AI components
      extensions: ['.css', '.scss', '.sass'],
    }),
  ],
  
  // PostCSS options
  map: isDevelopment ? { inline: false } : false,
  
  // Parser options
  parser: require('postcss-scss'),
  
  // Syntax options
  syntax: require('postcss-scss'),
  
  // PostCSS configuration
  config: {
    // Path to PostCSS config
    path: './postcss.config.js',
    // Context for plugins
    ctx: {
      // Environment
      env: process.env.NODE_ENV,
      // Christopher AI context
      christopher: {
        enabled: true,
        avatars: 8,
        languages: ['en', 'es', 'ar', 'zh', 'it'],
      },
      // Nevada context
      nevada: {
        enabled: true,
        compliance: true,
        attorneyBroker: true,
      },
      // Legal context
      legal: {
        enabled: true,
        compliance: true,
        attorneyClientPrivilege: true,
        hipaa: true,
      },
      // Development context
      development: {
        enabled: isDevelopment,
        sourceMaps: isDevelopment,
        optimization: isProduction,
      },
    },
  },
}
