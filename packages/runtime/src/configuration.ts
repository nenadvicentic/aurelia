import {
  DI,
  IContainer,
  IRegistry
} from '@aurelia/kernel';
import {
  FromViewBindingBehavior,
  OneTimeBindingBehavior,
  ToViewBindingBehavior,
  TwoWayBindingBehavior
} from './resources/binding-behaviors/binding-mode';
import { DebounceBindingBehavior } from './resources/binding-behaviors/debounce';
import { SignalBindingBehavior } from './resources/binding-behaviors/signals';
import { ThrottleBindingBehavior } from './resources/binding-behaviors/throttle';
import { FrequentMutations, InfrequentMutations, ObserveShallow } from './resources/custom-attributes/flags';
import { Else, If } from './resources/custom-attributes/if';
import { Repeat } from './resources/custom-attributes/repeat';
import { With } from './resources/custom-attributes/with';
import { SanitizeValueConverter } from './resources/value-converters/sanitize';
import { ViewValueConverter } from './resources/value-converters/view';
import { Now } from '@aurelia/scheduler';
import { AuSlot } from './resources/custom-elements/au-slot';

/**
 * Default implementations for the following interfaces:
 * - `IExpressionParserRegistration`
 * - `IObserverLocator`
 * - `ILifecycle`
 * - `IComposer`
 * - `IAppTaskManager`
 * - `IViewLocator`
 * - `IClockRegistration`
 * - `ISchedulerRegistration`
 */
export const DefaultComponents = [
  Now,
];

export const FrequentMutationsRegistration = FrequentMutations as unknown as IRegistry;
export const InfrequentMutationsRegistration = InfrequentMutations as unknown as IRegistry;
export const ObserveShallowRegistration = ObserveShallow as unknown as IRegistry;
export const IfRegistration = If as unknown as IRegistry;
export const ElseRegistration = Else as unknown as IRegistry;
export const RepeatRegistration = Repeat as unknown as IRegistry;
export const WithRegistration = With as unknown as IRegistry;
export const SanitizeValueConverterRegistration = SanitizeValueConverter as unknown as IRegistry;
export const ViewValueConverterRegistration = ViewValueConverter as unknown as IRegistry;
export const DebounceBindingBehaviorRegistration = DebounceBindingBehavior as unknown as IRegistry;
export const OneTimeBindingBehaviorRegistration = OneTimeBindingBehavior as unknown as IRegistry;
export const ToViewBindingBehaviorRegistration = ToViewBindingBehavior as unknown as IRegistry;
export const FromViewBindingBehaviorRegistration = FromViewBindingBehavior as unknown as IRegistry;
export const SignalBindingBehaviorRegistration = SignalBindingBehavior as unknown as IRegistry;
export const ThrottleBindingBehaviorRegistration = ThrottleBindingBehavior as unknown as IRegistry;
export const TwoWayBindingBehaviorRegistration = TwoWayBindingBehavior as unknown as IRegistry;

/**
 * Default resources:
 * - Template controllers (`if`/`else`, `repeat`, `with`)
 * - Value Converters (`sanitize`)
 * - Binding Behaviors (`oneTime`, `toView`, `fromView`, `twoWay`, `signal`, `debounce`, `throttle`)
 * - Custom element: au-slot
 */
export const DefaultResources = [
  FrequentMutationsRegistration,
  InfrequentMutationsRegistration,
  ObserveShallowRegistration,
  IfRegistration,
  ElseRegistration,
  RepeatRegistration,
  WithRegistration,
  SanitizeValueConverterRegistration,
  ViewValueConverterRegistration,
  DebounceBindingBehaviorRegistration,
  OneTimeBindingBehaviorRegistration,
  ToViewBindingBehaviorRegistration,
  FromViewBindingBehaviorRegistration,
  SignalBindingBehaviorRegistration,
  ThrottleBindingBehaviorRegistration,
  TwoWayBindingBehaviorRegistration,
  AuSlot,
];

/**
 * A DI configuration object containing environment/runtime-agnostic registrations:
 * - `DefaultComponents`
 * - `DefaultResources`
 * - `DefaultComposers`
 */
export const RuntimeConfiguration = {
  /**
   * Apply this configuration to the provided container.
   */
  register(container: IContainer): IContainer {
    return container.register(
      ...DefaultComponents,
      ...DefaultResources,
    );
  },
  /**
   * Create a new container with this configuration applied to it.
   */
  createContainer(): IContainer {
    return this.register(DI.createContainer());
  }
};
