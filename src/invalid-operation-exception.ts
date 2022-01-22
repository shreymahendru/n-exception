import { Exception } from "./exception";


export class InvalidOperationException extends Exception
{
    private readonly _reason: string;
    
    
    public get reason(): string { return this._reason; }
    
    
    public constructor(reason: string);
    public constructor(reason: string, innerException: Exception);
    public constructor(reason: string, innerException?: Exception)
    {
        if (reason == null || reason.isEmptyOrWhiteSpace())
            reason = "<UNKNOWN>";

        const message = `Operation is invalid due to reason '${reason}'.`;

        super(message, innerException);
        
        this._reason = reason;
    }
}