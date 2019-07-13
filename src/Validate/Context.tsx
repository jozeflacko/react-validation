import React from 'react';

interface IContext {
    children: JSX.Element | JSX.Element[];
}

export default class Context extends React.Component<IContext> {

    private ref: any = null;

    private static context: any = null;

    constructor(props: IContext) {
        super(props);
        this.ref = React.createRef();
    }

    private static setContext(ref: any) {
        Context.setContext(ref != null ? ref.current : null);
    }

    static getContext() {
        return this.context ? this.context.current : null;
    }

    render() {
        return <div ref={this.ref} className='validate_context'>{this.props.children}</div>
    }
}
