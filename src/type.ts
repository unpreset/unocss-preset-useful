export interface UsefulOptions {
  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string

  /**
   * Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   * ```ts
    themeAnimate: ['spin 1s linear infinite'],
   * ```
   */
  themeAnimate?: string[]
}

export type ResolvedOptions = Required<UsefulOptions>

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }
