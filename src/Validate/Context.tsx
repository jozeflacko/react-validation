import React from 'react';

interface IContext {
    children: JSX.Element | JSX.Element[];
}

export default class Context extends React.Component<IContext> {

    private static context: any = null;

    constructor(props: IContext) {
        super(props);
        Context.context = React.createRef();
    }

    static getContext() {
        return this.context ? this.context.current : null;
    }

    render() {
        return <div ref={Context.context} className='validate_context'>{this.props.children}</div>
    }
}
