export default TriangleCorner = () => {
    return <View style={[styles.triangleCorner, this.props.style]} />;
};

StyleSheet.create({
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 100,
        borderTopWidth: 100,
        borderRightColor: "transparent",
        borderTopColor: "blue",
    },
});
