import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  charset: 'UTF-8',
  'import': 'url("https://fonts.googleapis.com/css?family=Quicksand:400,700")',
  // *
 * Flex Grid -
 * Version: 0.3.5
 *
 * Simple grid built with flex box and sass.
 *
 * Matthew Simo - matthew.a.simo@gmail.com
  // *
 * Grid setup
 *
 * The grid will calculate dimensions based on these two variables:
 * $fg-columns will inform the grid loops how many columns there should be.
 * $fg-gutter will inform the grid loops how big eac column's gutters should be.
 *
 * The grid will name columns, rows, offsets based on these three variables:
 * $fg-class-row string used for the row class
 * $fg-class-col string used for the column class
 * $fg-class-off string used for the offset class
  // *
 * Break point namespace object
 *
 * Set the default namespace object with these defaults with the
 * understanding that you can pass in whatever you might require for your site.
 *
 * $fg-breakpoints is a Sass list with nested lists inside. Each sub list defines two things.
 * 1. The namespace for that breakpoint. (Required) (i.e. xs, sm, md, lg)
 * 2. The min-width measurement for the breakpoint for that namespace. (i.e. 48em, 62em, 75em)
 *
 * Note: These should be in the proper order (at least till libsass handles map keys properly).
 *
 * Note: If the measurement is left out then it will be skipped when generating
 * the grid and applied to global styles.
 *
  // *
 * Class Name Defaults
 *
 * Define class names for columns, rows and offsets in case compatibility with other
 * libraries is necessary.


/**
 * Calculate column size percentage
  // *
 * Spacing mixin to create uniform margin/padding
  // *
 * Row wrapper class, flex box parent.
  'row': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'row',
    'flexWrap': 'wrap',
    'marginLeft': [{ 'unit': 'rem', 'value': -0.5 }],
    'marginRight': [{ 'unit': 'rem', 'value': -0.5 }]
  },
  'col-xs': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-1': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-2': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-3': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-4': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-5': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-6': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-7': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-8': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-9': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-10': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-11': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs-12': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-1': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-2': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-3': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-4': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-5': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-6': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-7': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-8': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-9': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-10': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-11': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-sm-12': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-1': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-2': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-3': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-4': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-5': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-6': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-7': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-8': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-9': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-10': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-11': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-md-12': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-1': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-2': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-3': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-4': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-5': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-6': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-7': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-8': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-9': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-10': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-11': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-lg-12': {
    'boxSizing': 'border-box',
    'display': 'flex',
    'flexDirection': 'column',
    'flexGrow': '0',
    'flexShrink': '0',
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'only screen&&>w768': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w992': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    },
    'only screen&&>w1200': {
      'flexBasis': '8.33333%',
      'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
    }
  },
  'col-xs': {
    'flexGrow': '1',
    'flexBasis': '0',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-sm': {
    'flexGrow': '1',
    'flexBasis': '0',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-md': {
    'flexGrow': '1',
    'flexBasis': '0',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-lg': {
    'flexGrow': '1',
    'flexBasis': '0',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  // *
 * Generate a set of grid column classes using a namespace
 *
 * .col-[namespace] for intelligent column division
 * .col-[namespace]-[number] for a column that covers a specific number of columns (e.g. 1-12 by default)
 * .off-[namespace]-[number] for pushing a col a specific number of columns (e.g. 1-11 by default)
 * .off-[namespace]-reset for resetting a col's offset for that and larger namespaces
  // *
 * Build the grid in two steps, to help minimize file size
 * Step 1, for each namespace, create the grid-base
 * Step 2, for each namespace, wrap the col width/offset measurements in their breakpoint media query
  'col-xs-1': {
    'flexBasis': '8.33333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'col-xs-2': {
    'flexBasis': '16.66667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'col-xs-3': {
    'flexBasis': '25%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'col-xs-4': {
    'flexBasis': '33.33333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'col-xs-5': {
    'flexBasis': '41.66667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'col-xs-6': {
    'flexBasis': '50%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'col-xs-7': {
    'flexBasis': '58.33333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'col-xs-8': {
    'flexBasis': '66.66667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'col-xs-9': {
    'flexBasis': '75%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'col-xs-10': {
    'flexBasis': '83.33333%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'col-xs-11': {
    'flexBasis': '91.66667%',
    'maxWidth': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'col-xs-12': {
    'flexBasis': '100%',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'off-xs-1': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'off-xs-2': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'off-xs-3': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'off-xs-4': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'off-xs-5': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'off-xs-6': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'off-xs-7': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'off-xs-8': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'off-xs-9': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'off-xs-10': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'off-xs-11': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'off-xs-reset': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  // !
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
  'hamburger': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'display': 'inline-block',
    'cursor': 'pointer',
    'transitionProperty': 'opacity, filter',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'linear',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'textTransform': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'hamburger:hover': {
    'opacity': '0.7'
  },
  'hamburger-box': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'display': 'inline-block',
    'position': 'relative'
  },
  'hamburger-inner': {
    'display': 'block',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -2 }]
  },
  'hamburger-inner': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::before': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::after': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#000',
    'borderRadius': '4px',
    'position': 'absolute',
    'transitionProperty': 'transform',
    'transitionDuration': '0.15s',
    'transitionTimingFunction': 'ease'
  },
  'hamburger-inner::before': {
    'content': '""',
    'display': 'block'
  },
  'hamburger-inner::after': {
    'content': '""',
    'display': 'block'
  },
  'hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': -10 }]
  },
  'hamburger-inner::after': {
    'bottom': [{ 'unit': 'px', 'value': -10 }]
  },
  // * Spring
  'hamburger--spring hamburger-inner': {
    'top': [{ 'unit': 'px', 'value': 2 }],
    'transition': 'background-color 0s 0.15s linear'
  },
  'hamburger--spring hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 10 }],
    'transition': 'top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 20 }],
    'transition': 'top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--springis-active hamburger-inner': {
    'transitionDelay': '0.32s',
    'backgroundColor': 'transparent'
  },
  'hamburger--springis-active hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)',
    'transform': 'translate3d(0, 10px, 0) rotate(45deg)'
  },
  'hamburger--springis-active hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)',
    'transform': 'translate3d(0, 10px, 0) rotate(-45deg)'
  },
  // * Spring Reverse
  'hamburger--spring-r hamburger-inner': {
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'transitionDuration': '0.15s',
    'transitionDelay': '0s',
    'transitionTimingFunction': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring-r hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': -20 }],
    'transition': 'top 0.3s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear'
  },
  'hamburger--spring-r hamburger-inner::before': {
    'transition': 'top 0.12s 0.3s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19)'
  },
  'hamburger--spring-ris-active hamburger-inner': {
    'transform': 'translate3d(0, -10px, 0) rotate(-45deg)',
    'transitionDelay': '0.32s',
    'transitionTimingFunction': 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  },
  'hamburger--spring-ris-active hamburger-inner::after': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'transition': 'top 0.3s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.32s linear'
  },
  'hamburger--spring-ris-active hamburger-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'transform': 'rotate(90deg)',
    'transition': 'top 0.12s 0.18s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.15s 0.32s cubic-bezier(0.215, 0.61, 0.355, 1)'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'hide': {
    'display': 'none'
  },
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'hero': {
    'backgroundColor': '#d8d8d8',
    'height': [{ 'unit': 'px', 'value': 340 }],
    '>w48': {
      'height': [{ 'unit': 'px', 'value': 600 }]
    }
  },
  'hero logo': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 20 }],
    'zIndex': '1',
    'left': [{ 'unit': 'px', 'value': 20 }]
  },
  'hero nav-outer': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'transition': '0.4s all linear',
    'backgroundColor': 'transparent',
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 75 }],
    'color': '#fff',
    '>w48': {
      'backgroundColor': 'transparent',
      'paddingTop': [{ 'unit': 'px', 'value': 20 }]
    }
  },
  'hero nav-outeris-active': {
    'backgroundColor': 'rgba(39, 34, 59, 0.5)',
    '>w48': {
      'backgroundColor': 'transparent'
    }
  },
  'hero nav-outer div': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    '>w48': {
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
    }
  },
  'hero nav-outer div a': {
    'fontFamily': 'Quicksand',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'textAlign': 'center',
    'color': '#fff',
    'textDecoration': 'none',
    '>w48': {
      'color': '#27223B',
      'fontSize': [{ 'unit': 'px', 'value': 16 }]
    }
  },
  'hero nav-outer section': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'transition': '0.4s all linear',
    '>w48': {
      'height': [{ 'unit': 'string', 'value': 'inherit' }],
      'paddingTop': [{ 'unit': 'string', 'value': 'inherit' }]
    }
  },
  'hero nav-outer sectionopened': {
    'height': [{ 'unit': 'px', 'value': 265 }]
  },
  'hero nav-outer button': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': 10 }],
    '>w48': {
      'display': 'none'
    }
  },
  'hero nav-outer buttonis-active hamburger-inner:before': {
    'backgroundColor': '#fff'
  },
  'hero nav-outer buttonis-active hamburger-inner:after': {
    'backgroundColor': '#fff'
  },
  'thumb-wrapper': {
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 240 }],
    '>w48': {
      'height': [{ 'unit': 'px', 'value': 380 }]
    }
  },
  'thumb-wrapper thumb-inner': {
    'backgroundColor': '#d8d8d8',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'thumb-wrapper thumb-inner h4': {
    'display': 'none',
    'position': 'relative',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translateY(-50%)'
  },
  'thumb-wrapper thumb-inner:hover': {
    'backgroundColor': 'rgba(39, 34, 59, 0.5)'
  },
  'thumb-wrapper thumb-inner:hover h4': {
    'display': 'block'
  },
  'category-nav liner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#27223B' }]
  },
  'category-nav categoryIndicator': {
    'transition': '0.4s all',
    'height': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '3px',
    'marginTop': [{ 'unit': 'px', 'value': 3 }],
    'display': 'inline-block',
    'visibility': 'hidden',
    'marginLeft': [{ 'unit': '%H', 'value': NaN }]
  },
  'category-nav div': {
    'textAlign': 'center'
  },
  'category-nav div a': {
    'fontFamily': 'Quicksand',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'textDecoration': 'none',
    'color': '#27223B'
  },
  'main image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 1170 }],
    'maxHeight': [{ 'unit': 'px', 'value': 574 }]
  },
  'li': {
    'color': 'red',
    'fontFamily': 'Quicksand',
    'fontWeight': '400'
  },
  'sm-piece': {
    'maxWidth': [{ 'unit': 'px', 'value': 380 }],
    'maxHeight': [{ 'unit': 'px', 'value': 240 }]
  },
  'lg-piece': {
    'maxWidth': [{ 'unit': 'px', 'value': 380 }],
    'maxHeight': [{ 'unit': 'px', 'value': 380 }]
  },
  // pieces on-hover
  overlay: rgba(39,34,59,0.50);
  'p': {
    'fontFamily': 'Quicksand',
    'fontWeight': '400',
    'color': '#27223B',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'h2': {
    'fontFamily': 'Quicksand',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    // ems?
    'color': '#27223B',
    'textAlign': 'center'
  },
  'h3': {
    'fontFamily': 'Quicksand',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    // ems?
    'color': '#27223B'
  },
  // rollover text on individual pieces
  'h4': {
    'fontFamily': 'Quicksand',
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    // ems?
    'color': '#FFFFFF'
  },
  // Main Nav
  'nav': {
    'fontFamily': 'Quicksand',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#27223B',
    'fontStyle': 'uppercase'
  },
  // All Digital Print Branding
  'sub-nav': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#27223B',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  // ©2017 All Rights Res Copy:
  'copyright': {
    'fontFamily': 'Quicksand',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#27223B',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  }
});
