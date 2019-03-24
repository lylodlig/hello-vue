export default {
  //函数式组件，做临时变量
  functional: true,
  render: (h, ctx) => {
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  }
};
