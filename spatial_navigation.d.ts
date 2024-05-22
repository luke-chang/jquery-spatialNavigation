/** @format */

declare namespace SpatialNavigation {
  type Direction = "left" | "up" | "right" | "down";

  type LeaveFor = {
    [key in Direction]?: Selector;
  };

  type Selector = string | Element[] | Element | NodeList | Node | `@${string}`;

  interface Config {
    selector?: Selector;
    straightOnly?: boolean;
    straightOverlapThreshold?: number;
    rememberSource?: boolean;
    disabled?: boolean;
    defaultElement?: Selector;
    enterTo?: "" | "last-focused" | "default-element";
    leaveFor?: LeaveFor;
    restrict?: "self-first" | "self-only" | "none";
    tabIndexIgnoreList?: string;
    navigableFilter?: null | ((elem: Element, sectionId: string) => boolean);
  }

  interface GlobalConfig extends Config {
    keyMapping?: {
      [key: string]: Direction;
    };
  }

  function init(): void;

  function uninit(): void;

  function clear(): void;

  function set(sectionId: string, config: Config): void;
  function set(config: GlobalConfig): void;

  function add(sectionId: string, config: Config): string;
  function add(config?: Config): string;

  function remove(sectionId: string): boolean;

  function disable(sectionId: string): boolean;

  function enable(sectionId: string): boolean;

  function pause(): void;

  function resume(): void;

  function focus(elem: Selector, silent?: boolean): boolean;
  function focus(silent?: boolean): boolean;

  function move(direction: Direction, selector: Selector): boolean;
  function move(selector: Selector): boolean;

  function makeFocusable(sectionId?: string): void;

  function setDefaultSection(sectionId?: string): void;
}

export default SpatialNavigation;
