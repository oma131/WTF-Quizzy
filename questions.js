let questions = [
    //level 1
    {
        numb: 1,
        level: 1,
        question: "What does CSS stand for?",
        answer: "B. Cascading Style Sheets",
        options: [
            "A. Creative Style Sheets",
            "B. Cascading Style Sheets",
            "C. Computer Style Sheets",
            "D. Colorful Style Sheets"
        ]
    },
    {
        numb: 2,
        level: 1,
        question: "Which programming language is commonly used for frontend development?",
        answer: "A. JavaScript",
        options: [
            "A. JavaScript",
            "B. Python",
            "C. Java",
            "D. Ruby"
        ]
    },
    {
        numb: 3,
        level: 1,
        question: "What is the purpose of the HTML head element?",
        answer: "C. It contains metadata about the HTML document",
        options: [
            "A. It defines the main content of the document",
            "B. It represents the header of the document",
            "C. It contains metadata about the HTML document",
            "D. It defines a section in the document"
        ]
    },
    {
        numb: 4,
        level: 1,
        question: "What does the CSS property 'margin: auto;' do?",
        answer: "B. Centers the element horizontally within its containing element",
        options: [
            "A. Adds equal margin on all sides of the element",
            "B. Centers the element horizontally within its containing element",
            "C. Sets the element's margin to zero",
            "D. Increases the margin on the left side of the element"
        ]
    },
    {
        numb: 5,
        level: 1,
        question: "Which of the following is NOT a valid color representation in CSS?",
        answer: "D. Lightgreenishblue",
        options: [
            "A. #336699",
            "B. rgb(255, 0, 128)",
            "C. hsl(120, 100%, 50%)",
            "D. Lightgreenishblue"
        ]
    },
    {
        numb: 6,
        level: 1,
        question: "What is a responsive web design?",
        answer: "A. Design that adapts to various screen sizes and devices",
        options: [
            "A. Design that adapts to various screen sizes and devices",
            "B. Design with bright and flashy colors",
            "C. Design with fixed layout for desktop only",
            "D. Design without any images"
        ]
    },
    {
        numb: 7,
        level: 1,
        question: "Which HTML tag is used to create a hyperlink?",
        answer: "B. a",
        options: [
            "A. link",
            "B. a",
            "C. hlink",
            "D. href"
        ]
    },
    {
        numb: 8,
        level: 1,
        question: "What is the purpose of the CSS property 'z-index'?",
        answer: "C. Controls the stacking order of elements",
        options: [
            "A. Sets the background color of an element",
            "B. Defines the width of an element",
            "C. Controls the stacking order of elements",
            "D. Specifies the font size of text"
        ]
    },
    {
        numb: 9,
        level: 1,
        question: "In JavaScript, what is the purpose of the 'addEventListener' method?",
        answer: "A. Attaches an event handler to an element",
        options: [
            "A. Attaches an event handler to an element",
            "B. Adds a new HTML element to the page",
            "C. Animates elements on the page",
            "D. Adjusts the styling of an element"
        ]
    },
    {
        numb: 10,
        level: 1,
        question: "What is the purpose of the 'box-sizing' CSS property?",
        answer: "B. Defines how the total width and height of an element is calculated",
        options: [
            "A. Sets the color of the element's border",
            "B. Defines how the total width and height of an element is calculated",
            "C. Specifies the shape of an element",
            "D. Determines the opacity of an element"
        ]
    },

    // //level 2
    // {
    //     numb: 11,
    //     level: 2,
    //     question: "Which CSS selector targets all instances of a specific element?",
    //     answer: "A. Universal selector (*)",
    //     options: [
    //         "A. Universal selector (*)",
    //         "B. Class selector (.classname)",
    //         "C. ID selector (#id)",
    //         "D. Element selector (element)"
    //     ]
    // },
    // {
    //     numb: 12,
    //     level: 2,
    //     question: "What is the purpose of the HTML article element?",
    //     answer: "C. Represents a self-contained piece of content",
    //     options: [
    //         "A. Defines a navigation link",
    //         "B. Represents a heading for a section",
    //         "C. Represents a self-contained piece of content",
    //         "D. Creates a list item"
    //     ]
    // },
    // {
    //     numb: 13,
    //     level: 2,
    //     question: "What does the acronym API stand for in web development?",
    //     answer: "D. Application Programming Interface",
    //     options: [
    //         "A. Advanced Programming Integration",
    //         "B. Automated Processing Interface",
    //         "C. Advanced Protocol Integration",
    //         "D. Application Programming Interface"
    //     ]
    // },
    // {
    //     numb: 14,
    //     level: 2,
    //     question: "What is the purpose of the CSS 'position' property?",
    //     answer: "B. Specifies the positioning method used for an element",
    //     options: [
    //         "A. Defines the color of an element",
    //         "B. Specifies the positioning method used for an element",
    //         "C. Sets the transparency of an element",
    //         "D. Controls the size of an element"
    //     ]
    // },
    // {
    //     numb: 15,
    //     level: 2,
    //     question: "Which of the following is a valid way to comment in JavaScript?",
    //     answer: "C. // This is a comment",
    //     options: [
    //         "A. !-- This is a comment --",
    //         "B. /* This is a comment */",
    //         "C. // This is a comment",
    //         "D. -- This is a comment"
    //     ]
    // },
    // {
    //     numb: 16,
    //     level: 2,
    //     question: "What is the purpose of the HTML footer element?",
    //     answer: "A. Represents the footer of a section or a page",
    //     options: [
    //         "A. Represents the footer of a section or a page",
    //         "B. Defines a header for a section",
    //         "C. Creates a horizontal rule on the page",
    //         "D. Specifies a paragraph of text"
    //     ]
    // },
    // {
    //     numb: 17,
    //     level: 2,
    //     question: "Which JavaScript keyword is used to declare a variable?",
    //     answer: "B. var",
    //     options: [
    //         "A. let",
    //         "B. var",
    //         "C. const",
    //         "D. variable"
    //     ]
    // },
    // {
    //     numb: 18,
    //     level: 2,
    //     question: "What is the purpose of the CSS 'flexbox' layout?",
    //     answer: "C. Provides a flexible and efficient way to layout, align, and distribute space among items in a container",
    //     options: [
    //         "A. Creates a fixed-width layout",
    //         "B. Adds animation to elements",
    //         "C. Provides a flexible and efficient way to layout, align, and distribute space among items in a container",
    //         "D. Styles the font of an element"
    //     ]
    // },
    // {
    //     numb: 19,
    //     level: 2,
    //     question: "Which HTML element is used to define the structure of an HTML document?",
    //     answer: "B. html",
    //     options: [
    //         "A. head",
    //         "B. html",
    //         "C. body",
    //         "D. structure"
    //     ]
    // },
    // {
    //     numb: 20,
    //     level: 2,
    //     question: "What is the purpose of the CSS 'transition' property?",
    //     answer: "D. Adds smooth animations to CSS changes",
    //     options: [
    //         "A. Changes the background color of an element",
    //         "B. Adjusts the font size of text",
    //         "C. Defines the spacing between elements",
    //         "D. Adds smooth animations to CSS changes"
    //     ]
    // },

    // //level 3
    // {
    //     numb: 21,
    //     level: 3,
    //     question: "What is the purpose of the 'localStorage' in JavaScript?",
    //     answer: "C. Stores data with no expiration date",
    //     options: [
    //         "A. Deletes cookies from the browser",
    //         "B. Sends data to a server",
    //         "C. Stores data with no expiration date",
    //         "D. Displays an alert message"
    //     ]
    // },
    // {
    //     numb: 22,
    //     level: 3,
    //     question: "Which CSS property is used to control the space between elements?",
    //     answer: "A. margin",
    //     options: [
    //         "A. margin",
    //         "B. padding",
    //         "C. spacing",
    //         "D. border"
    //     ]
    // },
    // {
    //     numb: 23,
    //     level: 3,
    //     question: "In JavaScript, what is the purpose of the 'typeof' operator?",
    //     answer: "B. Returns a string indicating the type of the operand",
    //     options: [
    //         "A. Concatenates two strings",
    //         "B. Returns a string indicating the type of the operand",
    //         "C. Checks if a variable is defined",
    //         "D. Converts a string to a number"
    //     ]
    // },
    // {
    //     numb: 24,
    //     level: 3,
    //     question: "What does the acronym AJAX stand for in web development?",
    //     answer: "A. Asynchronous JavaScript and XML",
    //     options: [
    //         "A. Asynchronous JavaScript and XML",
    //         "B. Advanced JavaScript and XML",
    //         "C. Asynchronous JSON and XML",
    //         "D. Automated JavaScript and XML"
    //     ]
    // },
    // {
    //     numb: 25,
    //     level: 3,
    //     question: "Which HTML tag is used to create an unordered list?",
    //     answer: "C. ul",
    //     options: [
    //         "A. ol",
    //         "B. li",
    //         "C. ul",
    //         "D. dl"
    //     ]
    // },
    // {
    //     numb: 26,
    //     level: 3,
    //     question: "What is the purpose of the CSS 'box-shadow' property?",
    //     answer: "D. Adds a shadow effect to an element",
    //     options: [
    //         "A. Changes the color of an element",
    //         "B. Adjusts the font style of text",
    //         "C. Defines the width of an element",
    //         "D. Adds a shadow effect to an element"
    //     ]
    // },
    // {
    //     numb: 27,
    //     level: 3,
    //     question: "Which JavaScript method is used to remove the last element from an array?",
    //     answer: "A. pop()",
    //     options: [
    //         "A. pop()",
    //         "B. remove()",
    //         "C. delete()",
    //         "D. shift()"
    //     ]
    // },
    // {
    //     numb: 28,
    //     level: 3,
    //     question: "What is the purpose of the HTML nav element?",
    //     answer: "A. Represents navigation links",
    //     options: [
    //         "A. Represents navigation links",
    //         "B. Defines a section in the document",
    //         "C. Creates a horizontal rule on the page",
    //         "D. Specifies a paragraph of text"
    //     ]
    // },
    // {
    //     numb: 29,
    //     level: 3,
    //     question: "What is the role of the 'viewport' meta tag in HTML?",
    //     answer: "B. Specifies the behavior of the browser's viewport",
    //     options: [
    //         "A. Adds a background color to the page",
    //         "B. Specifies the behavior of the browser's viewport",
    //         "C. Defines a font style for the document",
    //         "D. Sets the width of the webpage"
    //     ]
    // },
    // {
    //     numb: 30,
    //     level: 3,
    //     question: "In CSS, what does the 'display: none;' property do?",
    //     answer: "C. Hides the element from the webpage",
    //     options: [
    //         "A. Increases the element's width",
    //         "B. Adds a border to the element",
    //         "C. Hides the element from the webpage",
    //         "D. Changes the element's background color"
    //     ]
    // },

    // //level 4
    // {
    //     numb: 31,
    //     level: 4,
    //     question: "Which event is triggered when a user clicks on an HTML element?",
    //     answer: "A. click",
    //     options: [
    //         "A. click",
    //         "B. hover",
    //         "C. scroll",
    //         "D. keypress"
    //     ]
    // },
    // {
    //     numb: 32,
    //     level: 4,
    //     question: "What is the purpose of the 'flex-grow' property in CSS?",
    //     answer: "B. Specifies how much an element should grow relative to the rest of the flexible items",
    //     options: [
    //         "A. Sets the color of an element",
    //         "B. Specifies how much an element should grow relative to the rest of the flexible items",
    //         "C. Defines the font size of text",
    //         "D. Adjusts the transparency of an element"
    //     ]
    // },
    // {
    //     numb: 33,
    //     level: 4,
    //     question: "Which HTML tag is used to embed a video?",
    //     answer: "C. video",
    //     options: [
    //         "A. img",
    //         "B. audio",
    //         "C. video",
    //         "D. embed"
    //     ]
    // },
    // {
    //     numb: 34,
    //     level: 4,
    //     question: "What is the purpose of the 'fetch' function in JavaScript?",
    //     answer: "A. Makes asynchronous HTTP requests",
    //     options: [
    //         "A. Makes asynchronous HTTP requests",
    //         "B. Adds elements to the DOM",
    //         "C. Animates elements on the page",
    //         "D. Defines a constant variable"
    //     ]
    // },
    // {
    //     numb: 35,
    //     level: 4,
    //     question: "What is the purpose of the CSS 'media queries'?",
    //     answer: "C. Adjusts the layout for different screen sizes and devices",
    //     options: [
    //         "A. Creates a fixed-width layout",
    //         "B. Adds animation to elements",
    //         "C. Adjusts the layout for different screen sizes and devices",
    //         "D. Styles the font of an element"
    //     ]
    // },
    // {
    //     numb: 36,
    //     level: 4,
    //     question: "Which HTML element is used to define a clickable button?",
    //     answer: "A. button",
    //     options: [
    //         "A. button",
    //         "B. input",
    //         "C. label",
    //         "D. form"
    //     ]
    // },
    // {
    //     numb: 37,
    //     level: 4,
    //     question: "What is the purpose of the 'addEventListener' method in JavaScript?",
    //     answer: "C. Attaches an event handler to an element",
    //     options: [
    //         "A. Creates a new HTML element",
    //         "B. Adds a style to an element",
    //         "C. Attaches an event handler to an element",
    //         "D. Removes an element from the DOM"
    //     ]
    // },
    // {
    //     numb: 38,
    //     level: 4,
    //     question: "Which CSS property is used to change the text color of an element?",
    //     answer: "D. color",
    //     options: [
    //         "A. background-color",
    //         "B. text-color",
    //         "C. font-color",
    //         "D. color"
    //     ]
    // },
    // {
    //     numb: 39,
    //     level: 4,
    //     question: "What is the purpose of the 'localStorage' in JavaScript?",
    //     answer: "C. Stores data with no expiration date",
    //     options: [
    //         "A. Deletes cookies from the browser",
    //         "B. Sends data to a server",
    //         "C. Stores data with no expiration date",
    //         "D. Displays an alert message"
    //     ]
    // },
    // {
    //     numb: 40,
    //     level: 4,
    //     question: "In CSS, what does the 'float' property do?",
    //     answer: "A. Positions an element to the left or right of its container",
    //     options: [
    //         "A. Positions an element to the left or right of its container",
    //         "B. Adds a shadow effect to an element",
    //         "C. Changes the background color of an element",
    //         "D. Adjusts the font style of text"
    //     ]
    // },

    // //level 5
    // {
    //     numb: 41,
    //     level: 5,
    //     question: "What is the purpose of the 'form' element in HTML?",
    //     answer: "C. Represents a container for form elements",
    //     options: [
    //         "A. Defines a hyperlink",
    //         "B. Creates a table",
    //         "C. Represents a container for form elements",
    //         "D. Adds a line break in the text"
    //     ]
    // },
    // {
    //     numb: 42,
    //     level: 5,
    //     question: "In JavaScript, what is the role of the 'this' keyword?",
    //     answer: "B. Refers to the current object",
    //     options: [
    //         "A. Declares a variable",
    //         "B. Refers to the current object",
    //         "C. Indicates the end of a statement",
    //         "D. Converts a string to a number"
    //     ]
    // },
    // {
    //     numb: 43,
    //     level: 5,
    //     question: "What is the purpose of the 'text-align' CSS property?",
    //     answer: "A. Specifies the horizontal alignment of text",
    //     options: [
    //         "A. Specifies the horizontal alignment of text",
    //         "B. Sets the font size of text",
    //         "C. Adds spacing between lines of text",
    //         "D. Defines the color of text"
    //     ]
    // },
    // {
    //     numb: 44,
    //     level: 5,
    //     question: "Which HTML tag is used to define an input field for the user to enter data?",
    //     answer: "B. input",
    //     options: [
    //         "A. form",
    //         "B. input",
    //         "C. label",
    //         "D. textbox"
    //     ]
    // },
    // {
    //     numb: 45,
    //     level: 5,
    //     question: "What is the purpose of the 'transition' CSS property?",
    //     answer: "D. Adds a smooth effect when changing property values",
    //     options: [
    //         "A. Defines the spacing between elements",
    //         "B. Sets the font style of text",
    //         "C. Adds a border to an element",
    //         "D. Adds a smooth effect when changing property values"
    //     ]
    // },
    // {
    //     numb: 46,
    //     level: 5,
    //     question: "In JavaScript, what is the difference between 'let', 'var', and 'const'?",
    //     answer: "C. Scope and reassignment capabilities",
    //     options: [
    //         "A. Data types",
    //         "B. Mathematical operations",
    //         "C. Scope and reassignment capabilities",
    //         "D. Conditional statements"
    //     ]
    // },
    // {
    //     numb: 47,
    //     level: 5,
    //     question: "Which CSS property is used to control the order of flex items?",
    //     answer: "A. order",
    //     options: [
    //         "A. order",
    //         "B. flex-direction",
    //         "C. flex-grow",
    //         "D. flex-shrink"
    //     ]
    // },
    // {
    //     numb: 48,
    //     level: 5,
    //     question: "What does the 'target' attribute in the HTML a tag do?",
    //     answer: "C. Specifies where to open the linked document",
    //     options: [
    //         "A. Changes the font style of the text",
    //         "B. Adds a border to the link",
    //         "C. Specifies where to open the linked document",
    //         "D. Defines the color of the link"
    //     ]
    // },
    // {
    //     numb: 49,
    //     level: 5,
    //     question: "What is the purpose of the 'splice' method in JavaScript?",
    //     answer: "B. Adds or removes elements from an array",
    //     options: [
    //         "A. Concatenates two arrays",
    //         "B. Adds or removes elements from an array",
    //         "C. Reverses the order of array elements",
    //         "D. Checks if an array includes a specific element"
    //     ]
    // },
    // {
    //     numb: 50,
    //     level: 5,
    //     question: "Which HTML tag is used to define a table row?",
    //     answer: "C. tr",
    //     options: [
    //         "A. table",
    //         "B. row",
    //         "C. tr",
    //         "D. td"
    //     ]
    // },

    // //level 6
    // {
    //     numb: 51,
    //     level: 6,
    //     question: "What is the purpose of the 'cursor' CSS property?",
    //     answer: "A. Specifies the type of cursor to be displayed",
    //     options: [
    //         "A. Specifies the type of cursor to be displayed",
    //         "B. Adds a shadow effect to an element",
    //         "C. Sets the font size of text",
    //         "D. Defines the spacing between elements"
    //     ]
    // },
    // {
    //     numb: 52,
    //     level: 6,
    //     question: "Which JavaScript method is used to join elements of an array into a string?",
    //     answer: "A. join()",
    //     options: [
    //         "A. join()",
    //         "B. merge()",
    //         "C. concatenate()",
    //         "D. combine()"
    //     ]
    // },
    // {
    //     numb: 53,
    //     level: 6,
    //     question: "What is the purpose of the 'rgba()' color representation in CSS?",
    //     answer: "D. Specifies a color using red, green, blue, and alpha (transparency) values",
    //     options: [
    //         "A. Defines a grayscale color",
    //         "B. Represents a hexadecimal color",
    //         "C. Sets the color based on hue, saturation, and lightness",
    //         "D. Specifies a color using red, green, blue, and alpha (transparency) values"
    //     ]
    // },
    // {
    //     numb: 54,
    //     level: 6,
    //     question: "In CSS, what is the 'box model' used for?",
    //     answer: "C. Describes the space around an element",
    //     options: [
    //         "A. Adds animation to elements",
    //         "B. Defines the shape of an element",
    //         "C. Describes the space around an element",
    //         "D. Adjusts the transparency of an element"
    //     ]
    // },
    // {
    //     numb: 55,
    //     level: 6,
    //     question: "What is the purpose of the 'JSON' format?",
    //     answer: "A. Data interchange between a server and a web application",
    //     options: [
    //         "A. Data interchange between a server and a web application",
    //         "B. A styling language for web pages",
    //         "C. A programming language",
    //         "D. A markup language for documents"
    //     ]
    // },
    // {
    //     numb: 56,
    //     level: 6,
    //     question: "Which CSS property is used to control the size of an element's font?",
    //     answer: "D. font-size",
    //     options: [
    //         "A. text-size",
    //         "B. font-style",
    //         "C. font-width",
    //         "D. font-size"
    //     ]
    // },
    // {
    //     numb: 57,
    //     level: 6,
    //     question: "What does the 'async' attribute do when added to a script tag in HTML?",
    //     answer: "B. Specifies that the script should be executed asynchronously",
    //     options: [
    //         "A. Delays the script execution",
    //         "B. Specifies that the script should be executed asynchronously",
    //         "C. Defines the script as an external file",
    //         "D. Blocks the rendering of the webpage"
    //     ]
    // },
    // {
    //     numb: 58,
    //     level: 6,
    //     question: "What is the purpose of the 'flex-shrink' property in CSS?",
    //     answer: "C. Specifies the ability of a flex item to shrink if necessary",
    //     options: [
    //         "A. Increases the size of a flex item",
    //         "B. Adds a shadow effect to a flex item",
    //         "C. Specifies the ability of a flex item to shrink if necessary",
    //         "D. Sets the order of a flex item"
    
    
    //     ]
    // },
    // {
    //     numb: 59,
    //     level: 6,
    //     question: "In JavaScript, what is the purpose of the 'map' method for arrays?",
    //     answer: "A. Creates a new array with the results of calling a provided function on every element",
    //     options: [
    //         "A. Creates a new array with the results of calling a provided function on every element",
    //         "B. Reverses the order of array elements",
    //         "C. Checks if an array includes a specific element",
    //         "D. Removes the last element from an array"
    //     ]
    // },
    // {
    //     numb: 60,
    //     level: 6,
    //     question: "Which HTML attribute is used to define the source URL of an embedded image?",
    //     answer: "B. src",
    //     options: [
    //         "A. href",
    //         "B. src",
    //         "C. alt",
    //         "D. link"
    //     ]
    // },

    // //level 7
    // {
    //     numb: 61,
    //     level: 7,
    //     question: "What is the purpose of the 'textContent' property in JavaScript?",
    //     answer: "C. Sets or returns the text content of a node",
    //     options: [
    //         "A. Changes the color of an element",
    //         "B. Adds a shadow effect to an element",
    //         "C. Sets or returns the text content of a node",
    //         "D. Animates elements on the page"
    //     ]
    // },
    // {
    //     numb: 62,
    //     level: 7,
    //     question: "In CSS, what is the 'pseudo-class' used for?",
    //     answer: "A. Selecting and styling elements based on their state or position",
    //     options: [
    //         "A. Selecting and styling elements based on their state or position",
    //         "B. Adding animation to elements",
    //         "C. Defining the font style of text",
    //         "D. Adjusting the spacing between elements"
    //     ]
    // },
    // {
    //     numb: 63,
    //     level: 7,
    //     question: "What does the term 'AJAX' stand for in web development?",
    //     answer: "A. Asynchronous JavaScript and XML",
    //     options: [
    //         "A. Asynchronous JavaScript and XML",
    //         "B. Advanced JavaScript and XML",
    //         "C. Automated JSON and XML",
    //         "D. Application JSON and XML"
    //     ]
    // },
    // {
    //     numb: 64,
    //     level: 7,
    //     question: "Which CSS property is used to set the background color of an element?",
    //     answer: "C. background-color",
    //     options: [
    //         "A. color",
    //         "B. text-color",
    //         "C. background-color",
    //         "D. fill-color"
    //     ]
    // },
    // {
    //     numb: 65,
    //     level: 7,
    //     question: "What is the purpose of the HTML 'data-*' attributes?",
    //     answer: "B. Allows storing private data for the page or application",
    //     options: [
    //         "A. Defines custom styles for an element",
    //         "B. Allows storing private data for the page or application",
    //         "C. Creates a hyperlink",
    //         "D. Adds a shadow effect to an element"
    //     ]
    // },
    // {
    //     numb: 66,
    //     level: 7,
    //     question: "Which event is triggered when an input field loses focus?",
    //     answer: "C. blur",
    //     options: [
    //         "A. focus",
    //         "B. change",
    //         "C. blur",
    //         "D. input"
    //     ]
    // },
    // {
    //     numb: 67,
    //     level: 7,
    //     question: "What is the purpose of the 'box-sizing: border-box;' CSS property?",
    //     answer: "A. Includes padding and border in the total width and height of an element",
    //     options: [
    //         "A. Includes padding and border in the total width and height of an element",
    //         "B. Adds a border to an element",
    //         "C. Adjusts the spacing between elements",
    //         "D. Defines the shape of an element"
    //     ]
    // },
    // {
    //     numb: 68,
    //     level: 7,
    //     question: "Which HTML tag is used to define a navigation menu?",
    //     answer: "D. nav",
    //     options: [
    //         "A. menu",
    //         "B. ul",
    //         "C. navbar",
    //         "D. nav"
    //     ]
    // },
    // {
    //     numb: 69,
    //     level: 7,
    //     question: "In JavaScript, what does the 'NaN' value represent?",
    //     answer: "B. Not-a-Number",
    //     options: [
    //         "A. Null",
    //         "B. Not-a-Number",
    //         "C. Negative",
    //         "D. No Action"
    //     ]
    // },
    // {
    //     numb: 70,
    //     level: 7,
    //     question: "What is the purpose of the 'keyframes' rule in CSS?",
    //     answer: "A. Specifies the animation sequence",
    //     options: [
    //         "A. Specifies the animation sequence",
    //         "B. Sets the color of an element",
    //         "C. Defines the font size of text",
    //         "D. Adds a shadow effect to an element"
    //     ]
    // },

    // //level 8
    // {
    //     numb: 71,
    //     level: 8,
    //     question: "Which CSS property is used to create rounded corners?",
    //     answer: "D. border-radius",
    //     options: [
    //         "A. corner-radius",
    //         "B. border-style",
    //         "C. curve-border",
    //         "D. border-radius"
    //     ]
    // },
    // {
    //     numb: 72,
    //     level: 8,
    //     question: "What is the purpose of the 'splice' method in JavaScript?",
    //     answer: "B. Adds or removes elements from an array",
    //     options: [
    //         "A. Concatenates two arrays",
    //         "B. Adds or removes elements from an array",
    //         "C. Reverses the order of array elements",
    //         "D. Checks if an array includes a specific element"
    //     ]
    // },
    // {
    //     numb: 73,
    //     level: 8,
    //     question: "Which HTML tag is used to define an ordered list?",
    //     answer: "A. ol",
    //     options: [
    //         "A. ol",
    //         "B. ul",
    //         "C. li",
    //         "D. list"
    //     ]
    // },
    // {
    //     numb: 74,
    //     level: 8,
    //     question: "What is the purpose of the 'border-collapse' CSS property for tables?",
    //     answer: "C. Specifies whether table borders should be collapsed into a single border or not",
    //     options: [
    //         "A. Adds spacing between table cells",
    //         "B. Defines the color of table borders",
    //         "C. Specifies whether table borders should be collapsed into a single border or not",
    //         "D. Sets the width of table cells"
    //     ]
    // },
    // {
    //     numb: 75,
    //     level: 8,
    //     question: "In JavaScript, what does the 'parseFloat()' function do?",
    //     answer: "D. Parses a string and returns a floating-point number",
    //     options: [
    //         "A. Converts a string to an integer",
    //         "B. Rounds a number to the nearest integer",
    //         "C. Creates a new array with the provided elements",
    //         "D. Parses a string and returns a floating-point number"
    //     ]
    // },
    // {
    //     numb: 76,
    //     level: 8,
    //     question: "What is the purpose of the 'localStorage' in JavaScript?",
    //     answer: "C. Stores data with no expiration date",
    //     options: [
    //         "A. Deletes cookies from the browser",
    //         "B. Sends data to a server",
    //         "C. Stores data with no expiration date",
    //         "D. Displays an alert message"
    //     ]
    // },
    // {
    //     numb: 77,
    //     level: 8,
    //     question: "Which CSS property is used to set the font family of an element?",
    //     answer: "A. font-family",
    //     options: [
    //         "A. font-family",
    //         "B. text-family",
    //         "C. font-style",
    //         "D. font-type"
    //     ]
    // },
    // {
    //     numb: 78,
    //     level: 8,
    //     question: "What is the purpose of the HTML aside element?",
    //     answer: "B. Represents content that is tangentially related to the content around it",
    //     options: [
    //         "A. Defines a header for a section",
    //         "B. Represents content that is tangentially related to the content around it",
    //         "C. Creates a horizontal rule on the page",
    //         "D. Specifies a paragraph of text"
    //     ]
    // },
    // {
    //     numb: 79,
    //     level: 8,
    //     question: "Which CSS property is used to control the visibility of an element?",
    //     answer: "C. visibility",
    //     options: [
    //         "A. display",
    //         "B. hidden",
    //         "C. visibility",
    //         "D. opacity"
    //     ]
    // },
    // {
    //     numb: 80,
    //     level: 8,
    //     question: "What is the purpose of the 'encodeURIComponent()' function in JavaScript?",
    //     answer: "A. Encodes a URI component by replacing special characters with escape sequences",
    //     options: [
    //         "A. Encodes a URI component by replacing special characters with escape sequences",
    //         "B. Decodes a URI component",
    //         "C. Adds a new element to the DOM",
    //         "D. Converts a string to uppercase"
    //     ]
    // },

    // //level 9
    // {
    //     numb: 81,
    //     level: 9,
    //     question: "Which CSS property is used to control the space between lines of text?",
    //     answer: "B. line-height",
    //     options: [
    //         "A. letter-spacing",
    //         "B. line-height",
    //         "C. word-spacing",
    //         "D. text-spacing"
    //     ]
    // },
    // {
    //     numb: 82,
    //     level: 9,
    //     question: "In JavaScript, what is the purpose of the 'setTimeout()' function?",
    //     answer: "A. Delays the execution of a function by a specified number of milliseconds",
    //     options: [
    //         "A. Delays the execution of a function by a specified number of milliseconds",
    //         "B. Repeats the execution of a function at regular intervals",
    //         "C. Stops the execution of a function",
    //         "D. Returns the current date and time"
    //     ]
    // },
    // {
    //     numb: 83,
    //     level: 9,
    //     question: "What is the purpose of the 'transition-timing-function' property in CSS?",
    //     answer: "C. Specifies the speed curve of a transition effect",
    //     options: [
    //         "A. Sets the duration of a transition effect",
    //         "B. Defines the properties to be transitioned",
    //         "C. Specifies the speed curve of a transition effect",
    //         "D. Determines the starting and ending values of a transition"
    //     ]
    // },
    // {
    //     numb: 84,
    //     level: 9,
    //     question: "Which HTML tag is used to define a hyperlink?",
    //     answer: "D. a",
    //     options: [
    //         "A. link",
    //         "B. hlink",
    //         "C. href",
    //         "D. a"
    //     ]
    // },
    // {
    //     numb: 85,
    //     level: 9,
    //     question: "What is the purpose of the 'position: fixed;' CSS property?",
    //     answer: "A. Positions the element relative to the browser window",
    //     options: [
    //         "A. Positions the element relative to the browser window",
    //         "B. Adds a border to the element",
    //         "C. Adjusts the spacing between elements",
    //         "D. Centers the element horizontally within its containing element"
    //     ]
    // },
    // {
    //     numb: 86,
    //     level: 9,
    //     question: "In JavaScript, what is the purpose of the 'querySelector()' method?",
    //     answer: "C. Returns the first element that matches a specified CSS selector",
    //     options: [
    //         "A. Adds a new HTML element to the page",
    //         "B. Creates a new array with the provided elements",
    //         "C. Returns the first element that matches a specified CSS selector",
    //         "D. Checks if a variable is defined"
    //     ]
    // },
    // {
    //     numb: 87,
    //     level: 9,
    //     question: "What does the CSS property 'overflow: hidden;' do?",
    //     answer: "D. Hides the content that overflows the element's box",
    //     options: [
    //         "A. Adds a shadow effect to the element",
    //         "B. Increases the element's width",
    //         "C. Creates a horizontal scrollbar",
    //         "D. Hides the content that overflows the element's box"
    //     ]
    // },
    // {
    //     numb: 88,
    //     level: 9,
    //     question: "Which HTML tag is used to define a line break?",
    //     answer: "C. br",
    //     options: [
    //         "A. lb",
    //         "B. line",
    //         "C. br",
    //         "D. break"
    //     ]
    // },
    // {
    //     numb: 89,
    //     level: 9,
    //     question: "What is the purpose of the 'localStorage' in JavaScript?",
    //     answer: "C. Stores data with no expiration date",
    //     options: [
    //         "A. Deletes cookies from the browser",
    //         "B. Sends data to a server",
    //         "C. Stores data with no expiration date",
    //         "D. Displays an alert message"
    //     ]
    // },
    // {
    //     numb: 90,
    //     level: 9,
    //     question: "What is the purpose of the 'box-shadow' property in CSS?",
    //     answer: "B. Adds a shadow effect to an element",
    //     options: [
    //         "A. Changes the background color of an element",
    //         "B. Adds a shadow effect to an element",
    //         "C. Sets the opacity of an element",
    //         "D. Adjusts the font size of text"
    //     ]
    // },

    // //level 10
    // {
    //     numb: 91,
    //     level: 10,
    //     question: "In JavaScript, what is the purpose of the 'splice()' method for arrays?",
    //     answer: "B. Adds or removes elements from an array",
    //     options: [
    //         "A. Concatenates two arrays",
    //         "B. Adds or removes elements from an array",
    //         "C. Reverses the order of array elements",
    //         "D. Checks if an array includes a specific element"
    //     ]
    // },
    // {
    //     numb: 92,
    //     level: 10,
    //     question: "Which HTML tag is used to define an image?",
    //     answer: "A. img",
    //     options: [
    //         "A. img",
    //         "B. image",
    //         "C. picture",
    //         "D. photo"
    //     ]
    // },
    // {
    //     numb: 93,
    //     level: 10,
    //     question: "What is the purpose of the 'transition-duration' property in CSS?",
    //     answer: "A. Specifies the duration of a transition effect",
    //     options: [
    //         "A. Specifies the duration of a transition effect",
    //         "B. Defines the properties to be transitioned",
    //         "C. Specifies the speed curve of a transition effect",
    //         "D. Determines the starting and ending values of a transition"
    //     ]
    // },
    // {
    //     numb: 94,
    //     level: 10,
    //     question: "In CSS, what does the 'visibility: hidden;' property do?",
    //     answer: "B. Hides the element, but it still takes up space in the layout",
    //     options: [
    //         "A. Removes the element from the DOM",
    //         "B. Hides the element, but it still takes up space in the layout",
    //         "C. Changes the background color of an element",
    //         "D. Adds a shadow effect to the element"
    //     ]
    // },
    // {
    //     numb: 95,
    //     level: 10,
    //     question: "What is the purpose of the 'text-transform' property in CSS?",
    //     answer: "C. Controls the capitalization of text",
    //     options: [
    //         "A. Sets the font style of text",
    //         "B. Defines the spacing between lines of text",
    //         "C. Controls the capitalization of text",
    //         "D. Specifies the horizontal alignment of text"
    //     ]
    // },
    // {
    //     numb: 96,
    //     level: 10,
    //     question: "Which JavaScript method is used to round a number to the nearest integer?",
    //     answer: "C. Math.round()",
    //     options: [
    //         "A. Math.floor()",
    //         "B. Math.ceil()",
    //         "C. Math.round()",
    //         "D. Math.trunc()"
    //     ]
    // },
    // {
    //     numb: 97,
    //     level: 10,
    //     question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
    //     answer: "A. Attaches an event handler to an element",
    //     options: [
    //         "A. Attaches an event handler to an element",
    //         "B. Removes an event handler from an element",
    //         "C. Creates a new HTML element",
    //         "D. Adds a style to an element"
    //     ]
    // },
    // {
    //     numb: 98,
    //     level: 10,
    //     question: "What does the CSS property 'flex-direction' control?",
    //     answer: "D. The direction of the main axis in a flex container",
    //     options: [
    //         "A. The spacing between flex items",
    //         "B. The order of flex items",
    //         "C. The size of flex items",
    //         "D. The direction of the main axis in a flex container"
    //     ]
    // },
    // {
    //     numb: 99,
    //     level: 10,
    //     question: "In JavaScript, what is the purpose of the 'push()' method for arrays?",
    //     answer: "A. Adds one or more elements to the end of an array",
    //     options: [
    //         "A. Adds one or more elements to the end of an array",
    //         "B. Removes the last element from an array",
    //         "C. Reverses the order of array elements",
    //         "D. Checks if an array includes a specific element"
    //     ]
    // },
    // {
    //     numb: 100,
    //     level: 10,
    //     question: "What is the purpose of the 'pointer-events' CSS property?",
    //     answer: "B. Controls whether an element can be the target for user events",
    //     options: [
    //         "A. Changes the appearance of the mouse pointer",
    //         "B. Controls whether an element can be the target for user events",
    //         "C. Adds a shadow effect to an element",
    //         "D. Sets the font size of text"
    //     ]
    // },    
]