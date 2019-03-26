export default {
  //函数式组件，做临时变量
  functional: true,
  render: (h, ctx) => {
    console.log(ctx.scopedSlots.default())
    console.log(ctx.scopedSlots.default(ctx.props))
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  }
};
