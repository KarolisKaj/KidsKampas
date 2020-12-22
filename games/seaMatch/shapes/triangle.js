export default Triangle = () => {
  return <View style={[styles.triangle, this.props.style]} />;
};

StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "yellow",
  },
});
