export class JayData{
	static src:string = "declare module $data{\r\n    class Geography{}\r\n    class GeographyLineString{}\r\n    class GeographyPolygon{}\r\n    class GeographyMultiPoint{}\r\n    class GeographyMultiPolygon{}\r\n    class GeographyMultiLineString{}\r\n    class GeographyCollection{}\r\n\r\n    class Geometry{}\r\n    class GeometryLineString{}\r\n    class GeometryPolygon{}\r\n    class GeometryMultiPoint{}\r\n    class GeometryMultiPolygon{}\r\n    class GeometryMultiLineString{}\r\n    class GeometryCollection{}\r\n\r\n    class Enum{}\r\n    class Entity{}\r\n    class EntitySet<T extends Entity> extends Queryable<T>{\r\n        add(item: T): T;\r\n        add(initData: {}): T;\r\n        attach(item: T): void;\r\n        attach(item: {}): void;\r\n        attachOrGet(item: T): T;\r\n        attachOrGet(item: {}): T;\r\n        detach(item: T): void;\r\n        detach(item: {}): void;\r\n        remove(item: T): void;\r\n        remove(item: {}): void;\r\n        elementType: T;\r\n    }\r\n    class EntityContext{\r\n        constructor(config?: any);\r\n        onReady(): Promise<EntityContext>;\r\n        saveChanges(): Promise<number>;\r\n\r\n    }\r\n\r\n    class Queryable<T extends Entity>{\r\n        filter(predicate: (it: T) => boolean, thisArg?: any): Queryable<T>;\r\n        map(projection: (it: T) => any): Queryable<any>;\r\n        orderBy(predicate: (it: any) => any): Queryable<T>;\r\n        include(selector: string): Queryable<T>;\r\n        skip(amount: number): Queryable<T>;\r\n        take(amount: number): Queryable<T>;\r\n        forEach(handler: (it: T) => void): Promise<T>;\r\n        length(): Promise<number>;\r\n        toArray(): Promise<T[]>;\r\n        single(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void): Promise<T>;\r\n        first(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void ): Promise<T>;\r\n        removeAll(): Promise<number>;\r\n    }\r\n    class ServiceAction{}\r\n    class ServiceFunction{}\r\n}\r\n\r\ninterface Thenable<R> {\r\n    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;\r\n    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;\r\n}\r\ndeclare class Promise<R> implements Thenable<R> {\r\n    constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);\r\n    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;\r\n    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;\r\n    catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;\r\n}\r\n\r\ndeclare module Edm {\r\n    type Boolean = boolean;\r\n    type Binary = Uint8Array;\r\n    type DateTime = Date;\r\n    type DateTimeOffset = Date;\r\n    type Duration = string;\r\n    type TimeOfDay = string;\r\n    type Date = string;\r\n    type Time = string;\r\n    type Decimal = string;\r\n    type Single = number;\r\n    type Float = number;\r\n    type Double = number;\r\n    type Guid = string;\r\n    type Int16 = number;\r\n    type Int32 = number;\r\n    type Int64 = string;\r\n    type Byte = number;\r\n    type SByte = number;\r\n    type String = string;\r\n    type GeographyPoint = $data.Geography;\r\n    type GeographyLineString = $data.GeographyLineString;\r\n    type GeographyPolygon = $data.GeographyPolygon;\r\n    type GeographyMultiPoint = $data.GeographyMultiPoint;\r\n    type GeographyMultiPolygon = $data.GeographyMultiPolygon;\r\n    type GeographyMultiLineString = $data.GeographyMultiLineString;\r\n    type GeographyCollection = $data.GeographyCollection;\r\n    type GeometryPoint = $data.Geometry;\r\n    type GeometryLineString = $data.GeometryLineString;\r\n    type GeometryPolygon = $data.GeometryPolygon;\r\n    type GeometryMultiPoint = $data.GeometryMultiPoint;\r\n    type GeometryMultiPolygon = $data.GeometryMultiPolygon;\r\n    type GeometryMultiLineString = $data.GeometryMultiLineString;\r\n    type GeometryCollection = $data.GeometryCollection;\r\n}\r\n"
}
