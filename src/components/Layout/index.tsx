import { LayoutComponent } from "./styles";

export function Layout(props: any) {
    return (
        <LayoutComponent className=''>
            {props.children}
        </LayoutComponent>
    )
}