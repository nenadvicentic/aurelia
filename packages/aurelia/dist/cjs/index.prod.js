Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@aurelia/kernel"),t=require("@aurelia/runtime-html"),r=require("@aurelia/platform-browser"),n=require("@aurelia/fetch-client"),o=require("@aurelia/router");const u=r.BrowserPlatform.getOrCreate(globalThis);class i extends t.Aurelia{constructor(r=function(){return e.DI.createContainer().register(e.Registration.instance(t.IPlatform,u),t.StandardConfiguration)}()){super(r)}static start(e){return(new i).start(e)}static app(e){return(new i).app(e)}static enhance(e){return(new i).enhance(e)}static register(...e){return(new i).register(...e)}app(e){if(t.CustomElement.isType(e)){const r=t.CustomElement.getDefinition(e);let n=document.querySelector(r.name);return null===n&&(n=document.body),super.app({host:n,component:e})}return super.app(e)}}Object.defineProperty(exports,"ColorOptions",{enumerable:!0,get:function(){return e.ColorOptions}}),Object.defineProperty(exports,"ConsoleSink",{enumerable:!0,get:function(){return e.ConsoleSink}}),Object.defineProperty(exports,"DI",{enumerable:!0,get:function(){return e.DI}}),Object.defineProperty(exports,"EventAggregator",{enumerable:!0,get:function(){return e.EventAggregator}}),Object.defineProperty(exports,"IContainer",{enumerable:!0,get:function(){return e.IContainer}}),Object.defineProperty(exports,"IEventAggregator",{enumerable:!0,get:function(){return e.IEventAggregator}}),Object.defineProperty(exports,"ILogger",{enumerable:!0,get:function(){return e.ILogger}}),Object.defineProperty(exports,"IServiceLocator",{enumerable:!0,get:function(){return e.IServiceLocator}}),Object.defineProperty(exports,"InstanceProvider",{enumerable:!0,get:function(){return e.InstanceProvider}}),Object.defineProperty(exports,"LogLevel",{enumerable:!0,get:function(){return e.LogLevel}}),Object.defineProperty(exports,"LoggerConfiguration",{enumerable:!0,get:function(){return e.LoggerConfiguration}}),Object.defineProperty(exports,"Metadata",{enumerable:!0,get:function(){return e.Metadata}}),Object.defineProperty(exports,"Registration",{enumerable:!0,get:function(){return e.Registration}}),Object.defineProperty(exports,"all",{enumerable:!0,get:function(){return e.all}}),Object.defineProperty(exports,"bound",{enumerable:!0,get:function(){return e.bound}}),Object.defineProperty(exports,"camelCase",{enumerable:!0,get:function(){return e.camelCase}}),Object.defineProperty(exports,"emptyArray",{enumerable:!0,get:function(){return e.emptyArray}}),Object.defineProperty(exports,"emptyObject",{enumerable:!0,get:function(){return e.emptyObject}}),Object.defineProperty(exports,"inject",{enumerable:!0,get:function(){return e.inject}}),Object.defineProperty(exports,"isArrayIndex",{enumerable:!0,get:function(){return e.isArrayIndex}}),Object.defineProperty(exports,"kebabCase",{enumerable:!0,get:function(){return e.kebabCase}}),Object.defineProperty(exports,"lazy",{enumerable:!0,get:function(){return e.lazy}}),Object.defineProperty(exports,"noop",{enumerable:!0,get:function(){return e.noop}}),Object.defineProperty(exports,"optional",{enumerable:!0,get:function(){return e.optional}}),Object.defineProperty(exports,"pascalCase",{enumerable:!0,get:function(){return e.pascalCase}}),Object.defineProperty(exports,"singleton",{enumerable:!0,get:function(){return e.singleton}}),Object.defineProperty(exports,"toArray",{enumerable:!0,get:function(){return e.toArray}}),Object.defineProperty(exports,"transient",{enumerable:!0,get:function(){return e.transient}}),Object.defineProperty(exports,"AppTask",{enumerable:!0,get:function(){return t.AppTask}}),Object.defineProperty(exports,"AuSlotsInfo",{enumerable:!0,get:function(){return t.AuSlotsInfo}}),Object.defineProperty(exports,"Bindable",{enumerable:!0,get:function(){return t.Bindable}}),Object.defineProperty(exports,"BindingBehavior",{enumerable:!0,get:function(){return t.BindingBehavior}}),Object.defineProperty(exports,"BindingMode",{enumerable:!0,get:function(){return t.BindingMode}}),Object.defineProperty(exports,"ComputedObserver",{enumerable:!0,get:function(){return t.ComputedObserver}}),Object.defineProperty(exports,"ComputedWatcher",{enumerable:!0,get:function(){return t.ComputedWatcher}}),Object.defineProperty(exports,"Controller",{enumerable:!0,get:function(){return t.Controller}}),Object.defineProperty(exports,"CustomAttribute",{enumerable:!0,get:function(){return t.CustomAttribute}}),Object.defineProperty(exports,"CustomElement",{enumerable:!0,get:function(){return t.CustomElement}}),Object.defineProperty(exports,"ExpressionWatcher",{enumerable:!0,get:function(){return t.ExpressionWatcher}}),Object.defineProperty(exports,"IAppRoot",{enumerable:!0,get:function(){return t.IAppRoot}}),Object.defineProperty(exports,"IAttrMapper",{enumerable:!0,get:function(){return t.IAttrMapper}}),Object.defineProperty(exports,"IAttributePattern",{enumerable:!0,get:function(){return t.IAttributePattern}}),Object.defineProperty(exports,"IAuSlotsInfo",{enumerable:!0,get:function(){return t.IAuSlotsInfo}}),Object.defineProperty(exports,"IAurelia",{enumerable:!0,get:function(){return t.IAurelia}}),Object.defineProperty(exports,"IEventTarget",{enumerable:!0,get:function(){return t.IEventTarget}}),Object.defineProperty(exports,"ILifecycleHooks",{enumerable:!0,get:function(){return t.ILifecycleHooks}}),Object.defineProperty(exports,"INode",{enumerable:!0,get:function(){return t.INode}}),Object.defineProperty(exports,"IObserverLocator",{enumerable:!0,get:function(){return t.IObserverLocator}}),Object.defineProperty(exports,"IPlatform",{enumerable:!0,get:function(){return t.IPlatform}}),Object.defineProperty(exports,"IRenderLocation",{enumerable:!0,get:function(){return t.IRenderLocation}}),Object.defineProperty(exports,"ISignaler",{enumerable:!0,get:function(){return t.ISignaler}}),Object.defineProperty(exports,"ITemplateCompilerHooks",{enumerable:!0,get:function(){return t.ITemplateCompilerHooks}}),Object.defineProperty(exports,"IWorkTracker",{enumerable:!0,get:function(){return t.IWorkTracker}}),Object.defineProperty(exports,"LifecycleFlags",{enumerable:!0,get:function(){return t.LifecycleFlags}}),Object.defineProperty(exports,"LifecycleHooks",{enumerable:!0,get:function(){return t.LifecycleHooks}}),Object.defineProperty(exports,"NodeObserverLocator",{enumerable:!0,get:function(){return t.NodeObserverLocator}}),Object.defineProperty(exports,"ShortHandBindingSyntax",{enumerable:!0,get:function(){return t.ShortHandBindingSyntax}}),Object.defineProperty(exports,"StyleConfiguration",{enumerable:!0,get:function(){return t.StyleConfiguration}}),Object.defineProperty(exports,"TaskQueuePriority",{enumerable:!0,get:function(){return t.TaskQueuePriority}}),Object.defineProperty(exports,"TemplateCompilerHooks",{enumerable:!0,get:function(){return t.TemplateCompilerHooks}}),Object.defineProperty(exports,"ValueConverter",{enumerable:!0,get:function(){return t.ValueConverter}}),Object.defineProperty(exports,"ViewFactory",{enumerable:!0,get:function(){return t.ViewFactory}}),Object.defineProperty(exports,"Watch",{enumerable:!0,get:function(){return t.Watch}}),Object.defineProperty(exports,"alias",{enumerable:!0,get:function(){return t.alias}}),Object.defineProperty(exports,"attributePattern",{enumerable:!0,get:function(){return t.attributePattern}}),Object.defineProperty(exports,"bindable",{enumerable:!0,get:function(){return t.bindable}}),Object.defineProperty(exports,"bindingBehavior",{enumerable:!0,get:function(){return t.bindingBehavior}}),Object.defineProperty(exports,"bindingCommand",{enumerable:!0,get:function(){return t.bindingCommand}}),Object.defineProperty(exports,"children",{enumerable:!0,get:function(){return t.children}}),Object.defineProperty(exports,"containerless",{enumerable:!0,get:function(){return t.containerless}}),Object.defineProperty(exports,"createElement",{enumerable:!0,get:function(){return t.createElement}}),Object.defineProperty(exports,"cssModules",{enumerable:!0,get:function(){return t.cssModules}}),Object.defineProperty(exports,"customAttribute",{enumerable:!0,get:function(){return t.customAttribute}}),Object.defineProperty(exports,"customElement",{enumerable:!0,get:function(){return t.customElement}}),Object.defineProperty(exports,"lifecycleHooks",{enumerable:!0,get:function(){return t.lifecycleHooks}}),Object.defineProperty(exports,"registerAliases",{enumerable:!0,get:function(){return t.registerAliases}}),Object.defineProperty(exports,"renderer",{enumerable:!0,get:function(){return t.renderer}}),Object.defineProperty(exports,"shadowCSS",{enumerable:!0,get:function(){return t.shadowCSS}}),Object.defineProperty(exports,"subscriberCollection",{enumerable:!0,get:function(){return t.subscriberCollection}}),Object.defineProperty(exports,"templateCompilerHooks",{enumerable:!0,get:function(){return t.templateCompilerHooks}}),Object.defineProperty(exports,"templateController",{enumerable:!0,get:function(){return t.templateController}}),Object.defineProperty(exports,"useShadowDOM",{enumerable:!0,get:function(){return t.useShadowDOM}}),Object.defineProperty(exports,"valueConverter",{enumerable:!0,get:function(){return t.valueConverter}}),Object.defineProperty(exports,"watch",{enumerable:!0,get:function(){return t.watch}}),Object.defineProperty(exports,"HttpClient",{enumerable:!0,get:function(){return n.HttpClient}}),Object.defineProperty(exports,"HttpClientConfiguration",{enumerable:!0,get:function(){return n.HttpClientConfiguration}}),Object.defineProperty(exports,"IHttpClient",{enumerable:!0,get:function(){return n.IHttpClient}}),Object.defineProperty(exports,"json",{enumerable:!0,get:function(){return n.json}}),Object.defineProperty(exports,"IRouteContext",{enumerable:!0,get:function(){return o.IRouteContext}}),Object.defineProperty(exports,"IRouter",{enumerable:!0,get:function(){return o.IRouter}}),Object.defineProperty(exports,"IRouterEvents",{enumerable:!0,get:function(){return o.IRouterEvents}}),Object.defineProperty(exports,"Route",{enumerable:!0,get:function(){return o.Route}}),Object.defineProperty(exports,"RouteConfig",{enumerable:!0,get:function(){return o.RouteConfig}}),Object.defineProperty(exports,"RouteNode",{enumerable:!0,get:function(){return o.RouteNode}}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return o.Router}}),Object.defineProperty(exports,"RouterConfiguration",{enumerable:!0,get:function(){return o.RouterConfiguration}}),Object.defineProperty(exports,"RouterOptions",{enumerable:!0,get:function(){return o.RouterOptions}}),Object.defineProperty(exports,"RouterRegistration",{enumerable:!0,get:function(){return o.RouterRegistration}}),Object.defineProperty(exports,"route",{enumerable:!0,get:function(){return o.route}}),exports.Aurelia=i,exports.PLATFORM=u,exports.default=i;