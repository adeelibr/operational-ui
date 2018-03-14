import PieChartCanvas from "./canvas";
import Series from "./series";
import StateHandler from "../utils/state_handler";
import EventEmitter from "../utils/event_bus";
import { Accessors, Components, Data, Facade, PieChartConfig } from "./typings";
declare class PieChartFacade implements Facade {
    __disposed: boolean;
    canvas: PieChartCanvas;
    components: Components;
    context: Element;
    events: EventEmitter;
    series: Series;
    state: StateHandler<PieChartConfig, Data>;
    constructor(context: Element);
    private insertState();
    private initialConfig();
    private initialAccessors();
    private initialComputed();
    private insertCanvas();
    private insertComponents();
    private insertSeries();
    data(data?: Data): Data;
    config(config?: Partial<PieChartConfig>): PieChartConfig;
    accessors(type: string, accessors: Accessors<any>): Accessors<any>;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): Element;
    close(): void;
}
export default PieChartFacade;
