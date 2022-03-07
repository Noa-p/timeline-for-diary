export type Position = 'top' | 'right' | 'bottom' | 'left' | 'center';

type PopupPropsWithoutChildren = {
  node?: HTMLElement;
} & typeof defaultProps;

export type PopupProps = React.PropsWithChildren<PopupPropsWithoutChildren>;

export type PortalProps = React.PropsWithChildren<{
  node?: HTMLElement;
}>;

// 默认属性写在这儿很难受 实在是typescript 对react组件默认属性的声明就是得这么拧巴
export const defaultProps = {
  visible: false,
  position: 'center' as Position,
  mask: true,
  maskClosable: false,
  onClose: () => {},
  destroyOnClose: false,
  wrapClassName: '',
};
