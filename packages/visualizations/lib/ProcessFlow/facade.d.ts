import ProcessFlowCanvas from "./canvas";
import Series from "./series";
import StateHandler from "../utils/state_handler";
import EventEmitter from "../utils/event_bus";
import { Accessors, Components, Facade, InputData, ProcessFlowConfig } from "./typings";
declare class ProcessFlowFacade implements Facade {
    __disposed: boolean;
    canvas: ProcessFlowCanvas;
    components: Components;
    context: Element;
    events: EventEmitter;
    series: Series;
    state: StateHandler<ProcessFlowConfig, InputData>;
    constructor(context: Element);
    private insertState();
    private initialConfig();
    private initialAccessors();
    private initialComputed();
    private insertCanvas();
    private insertComponents();
    private insertSeries();
    data(data?: InputData): InputData;
    config(config?: Partial<ProcessFlowConfig>): ProcessFlowConfig;
    accessors(type: string, accessors: Accessors<any>): Accessors<any>;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): Element;
    close(): void;
}
export default ProcessFlowFacade;
