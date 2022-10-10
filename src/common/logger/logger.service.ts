import 'reflect-metadata';

import pino, { Logger } from "pino";
import { injectable } from 'inversify';
import { LoggerInterface } from "./logger.interface.js";

@injectable()
export default class LoggerService implements LoggerInterface {
	constructor(private logger: Logger = pino()) { 	}

	public debug(message: string, ...args: unknown[]): void {
		this.logger.debug(message, ...args);
	}
	
	public warn(message: string, ...args: unknown[]): void {
		this.logger.warn(message, ...args);
	}
	
	public error(message: string, ...args: unknown[]): void {
		this.logger.error(message, ...args);
	}

	public info(message: string, ...args: unknown[]): void {
		this.logger.info(message, ...args);
	}
}
