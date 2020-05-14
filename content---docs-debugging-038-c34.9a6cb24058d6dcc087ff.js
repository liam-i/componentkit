(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",function(){return c}),a.d(n,"rightToc",function(){return b}),a.d(n,"default",function(){return h});a(0);var t=a(133),o=a(134),i=a.n(o);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c={title:"Debugging"},b=[{value:"Print Component Hierarchy",id:"print-component-hierarchy",children:[{value:"pcomponents",id:"pcomponents",children:[]}]},{value:"Visually Debug Components",id:"visually-debug-components",children:[{value:"dcomponents",id:"dcomponents",children:[]},{value:"Xcode Debug View Hierachy / Reveal Integration",id:"xcode-debug-view-hierachy--reveal-integration",children:[]}]}],s={rightToc:b},p="wrapper";function h(e){var n=e.components,a=l(e,["components"]);return Object(t.b)(p,r({},s,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"When working with ComponentKit, you would generally uses generic views such as ",Object(t.b)("inlineCode",{parentName:"p"},"UIButton"),", ",Object(t.b)("inlineCode",{parentName:"p"},"UIImageView"),", etc. under the hood. Hence, when you run a command in the LLDB debugger like ",Object(t.b)("a",r({parentName:"p"},{href:"http://www.github.com/facebook/chisel"}),"Chisel's")," ",Object(t.b)("inlineCode",{parentName:"p"},"pviews")," you'll see a generic view hierarchy with no information about components. The following is the output of running ",Object(t.b)("inlineCode",{parentName:"p"},"pviews")," for an application using ComponentKit."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"| <UICollectionView: 0x7caf3800; frame = (0 0; 320 568); clipsToBounds = YES; autoresize = W+H; gestureRecognizers = <NSArray: 0x7b462e50>; layer = <CALayer: 0x7b462a80>; contentOffset: {0, 315}; contentSize: {320, 5951}> collection view layout: <UICollectionViewFlowLayout: 0x7ae60ab0>\n|    | <UICollectionViewCell: 0x7b1b9e00; frame = (0 0; 320 496.5); layer = <CALayer: 0x7b1b9fa0>>\n|    |    | <UIView: 0x7b1ba150; frame = (0 0; 320 496.5); gestureRecognizers = <NSArray: 0x7b06f360>; layer = <CALayer: 0x7b1ba1c0>>\n|    |    |    | <UIView: 0x7b1ba8d0; frame = (0 0; 320 496.5); gestureRecognizers = <NSArray: 0x7b1baed0>; layer = <CALayer: 0x7b1ba940>>\n|    |    |    |    | <UIImageView: 0x7b1bb220; frame = (0 0; 320 496); clipsToBounds = YES; opaque = NO; userInteractionEnabled = NO; layer = <CALayer: 0x7b1bb2a0>>\n|    |    |    |    | <CKTextComponentView: 0x7ae61820; baseClass = UIControl; frame = (20.5 70; 278.5 240.5); userInteractionEnabled = NO; layer = <CKTextComponentLayer: 0x7ae61da0>>\n|    |    |    |    | <CKTextComponentView: 0x7ae71820; baseClass = UIControl; frame = (230.5 310.5; 64.5 160.5); userInteractionEnabled = NO; layer = <CKTextComponentLayer: 0x7ae640f0>>\n|    |    |    |    | <UIView: 0x7ae72670; frame = (0 496; 320 0.5); layer = <CALayer: 0x7ae726e0>>\n...................................\n|    | <UICollectionViewCell: 0x7b1b6040; frame = (0 852; 320 416.5); layer = <CALayer: 0x7b1a8990>>\n|    |    | <UIView: 0x7b1b0600; frame = (0 0; 320 416.5); gestureRecognizers = <NSArray: 0x7b1ac610>; layer = <CALayer: 0x7b1b93f0>>\n|    |    |    | <UIView: 0x7b1a6530; frame = (0 0; 320 416.5); gestureRecognizers = <NSArray: 0x7b1aa1d0>; layer = <CALayer: 0x7b1a65a0>>\n|    |    |    |    | <UIImageView: 0x7b1b6cf0; frame = (0 0; 320 416); clipsToBounds = YES; opaque = NO; userInteractionEnabled = NO; layer = <CALayer: 0x7b1b6d70>>\n|    |    |    |    | <CKTextComponentView: 0x7b1b86c0; baseClass = UIControl; frame = (30 133; 260 150.5); userInteractionEnabled = NO; layer = <CKTextComponentLayer: 0x7b1b8750>>\n|    |    |    |    | <UIView: 0x7ae735e0; frame = (0 416; 320 0.5); layer = <CALayer: 0x7ae74cd0>>\n|    | <UIImageView: 0x7b4665f0; frame = (313 565.5; 7 2.5); alpha = 0; opaque = NO; autoresize = TM; userInteractionEnabled = NO; layer = <CALayer: 0x7b466900>>\n|    | <UIImageView: 0x7b466e30; frame = (314.5 413.5; 2.5 47); alpha = 0; opaque = NO; autoresize = LM; userInteractionEnabled = NO; layer = <CALayer: 0x7b466eb0>>\n")),Object(t.b)("p",null,"ComponentKit includes a set of debugging tools that help you debug component hierarchies and has strong integration with  ",Object(t.b)("a",r({parentName:"p"},{href:"http://www.github.com/facebook/chisel"}),"Chisel"),". Clone the ",Object(t.b)("a",r({parentName:"p"},{href:"http://www.github.com/facebook/chisel"}),"github repo")," of Chisel and install it to enable the latest commands."),Object(t.b)("div",{class:"note-important"},Object(t.b)("p",null,"The following functionality is intended for debugging only and is not suitable for use in production.")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"print-component-hierarchy"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#print-component-hierarchy"}),"#"),"Print Component Hierarchy"),Object(t.b)("p",null,"Type the following in the debugger to print the component hierarchy:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) po [CKComponentHierarchyDebugHelper componentHierarchyDescription]\n")),Object(t.b)("p",null,"This includes layout information like position and size. It is designed to be analogous to how ",Object(t.b)("inlineCode",{parentName:"p"},"pviews")," works. It is the easiest way to reason about where your layout might have gone wrong while looking at the component rendered on screen."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"For View: <UIView: 0x7b249f70; frame = (0 0; 320 355.5); gestureRecognizers = <NSArray: 0x7b544aa0>; layer = <CALayer: 0x7b249fe0>>\n<InteractiveQuoteComponent: 0x7ae6f710>, Position: {0, 0}, Size: {320, 355.5}\n| <CKFlexboxComponent: 0x7ae6f670>, Position: {0, 0}, Size: {320, 355.5}\n| | <MonochromeQuoteComponent: 0x7ae6f380>, Position: {0, 0}, Size: {320, 355}\n| | | <QuoteBackgroundComponent: 0x7ae6f330>, Position: {0, 0}, Size: {320, 355}\n| | | | <CKBackgroundLayoutComponent: 0x7ae6f2e0>, Position: {0, 0}, Size: {320, 355}\n| | | | | <CKComponent: 0x7ae6f290>, Position: {0, 0}, Size: {320, 355}\n| | | | | <CKInsetComponent: 0x7ae6d6c0>, Position: {0, 0}, Size: {320, 355}\n| | | | | | <CKBackgroundLayoutComponent: 0x7ae6d670>, Position: {0, 40}, Size: {280, 275}\n| | | | | | | <CKComponent: 0x7ae6d620>, Position: {0, 0}, Size: {280, 275}\n| | | | | | | <CKFlexboxComponent: 0x7ae6d4b0>, Position: {0, 0}, Size: {280, 275}\n| | | | | | | | <CKComponent: 0x7ae6b500>, Position: {10, 0}, Size: {20, 40}\n| | | | | | | | <CKInsetComponent: 0x7ae6d450>, Position: {30, 0}, Size: {250, 275}\n| | | | | | | | | <CKLabelComponent: 0x7ae6d400>, Position: {20, 50}, Size: {210, 175}\n| | | | | | | | | | <CKTextComponent: 0x7ae6d380>, Position: {0, 0}, Size: {210, 175}\n| | <CKComponent: 0x7ae6f5e0>, Position: {0, 355}, Size: {320, 0.5}\n")),Object(t.b)("p",null,"Optionally you can use:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) po [CKComponentHierarchyDebugHelper componentHierarchyDescriptionForView:0x7be52100 searchUpwards:NO]\n")),Object(t.b)("p",null,"This method takes in a view from where to begin its search and the search can be upwards as well, as shown in this case, it traverses up to find the first view on which there's a component hierarchy attached. Note that this works by finding the view at which the root component is attached and then printing the view hierarchy from there downwards."),Object(t.b)("div",{class:"note"},Object(t.b)("p",null,"Generally, if you run this helper you will be presented with multiple component hierarchies, one each for each visible cell. To get the component hierarchy for the cell you're interested in, type ",Object(t.b)("inlineCode",{parentName:"p"},"taplog")," on the console and click on a view in the cell you're interested in - ",Object(t.b)("inlineCode",{parentName:"p"},"taplog")," would give you the memory address of that view, which you can copy. Then you can use the helper method with the search upwards functionality to get the hierarchy for the cell you are interested in.")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"pcomponents"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#pcomponents"}),"#"),Object(t.b)("inlineCode",{parentName:"h3"},"pcomponents")),Object(t.b)("p",null,"To make this easier, we have a LLDB command in Chisel called ",Object(t.b)("inlineCode",{parentName:"p"},"pcomponents"),", which is a convenient way to print the component hierachy. Utilizing LLDB's prefix matching, you can even shorten that to ",Object(t.b)("inlineCode",{parentName:"p"},"pco"),"."),Object(t.b)("p",null,"Optionally, it can take a view and also search upwards using the ",Object(t.b)("inlineCode",{parentName:"p"},"-u")," flag."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) pco -u <view>\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"visually-debug-components"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#visually-debug-components"}),"#"),"Visually Debug Components"),Object(t.b)("p",null,"ComponentKit has helpers to set up debug views, which are phantom views for components which usually wouldn't create any view. To enable debug mode:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) e (void)[CKComponentDebugController setDebugMode:YES]\n")),Object(t.b)("p",null,"Looking through the view hierarchy gives a visual manifestation to layout and can be useful for debugging. Executing the ",Object(t.b)("inlineCode",{parentName:"p"},"pviews")," command will now give us a set of views which have the suffix ",Object(t.b)("inlineCode",{parentName:"p"},"View_Debug")," which denote phantom component views, we gives a sense of the component hierarchy in the view hierarchy itself, since the phantom views generated have their backing components name as their prefix."),Object(t.b)("p",null,"To unset, just ",Object(t.b)("inlineCode",{parentName:"p"},"setDebugMode:NO")," instead."),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"dcomponents"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#dcomponents"}),"#"),Object(t.b)("inlineCode",{parentName:"h3"},"dcomponents")),Object(t.b)("p",null,"Again, we simplify the debug view helper using a LLDB command in Chisel - ",Object(t.b)("inlineCode",{parentName:"p"},"dcomponents"),"."),Object(t.b)("p",null,"To enable debug view mode:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) dc -s\n")),Object(t.b)("p",null,"and to disable:"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-sh"}),"(lldb) dc -u\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"xcode-debug-view-hierachy--reveal-integration"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#xcode-debug-view-hierachy--reveal-integration"}),"#"),"Xcode Debug View Hierachy / Reveal Integration"),Object(t.b)("p",null,"This helper really shines when you can actually see the view hierarchy, be it in Xcode or ",Object(t.b)("a",r({parentName:"p"},{href:"http://revealapp.com/"}),"Reveal")),Object(t.b)("p",null,"If you use the the Xcode's default ",Object(t.b)("em",{parentName:"p"},"Debug View Hierarchy")," tool to see the individual views:"),Object(t.b)("img",{src:i()("assets/xcode-debug.png"),alt:"Debug Components with Xcode"}),Object(t.b)("p",null,"Or you can use ",Object(t.b)("a",r({parentName:"p"},{href:"http://revealapp.com/"}),"Reveal"),":"),Object(t.b)("img",{src:i()("assets/reveal-debug.png"),alt:"Debug Components with Reveal"}))}h.isMDXComponent=!0}}]);