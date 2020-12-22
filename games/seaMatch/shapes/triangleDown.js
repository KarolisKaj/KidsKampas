import Triangle from 'triangle'

export default TriangleDown = () => {
    return <Triangle style={styles.triangleDown} />;
};

StyleSheet.create({
    triangleDown: {
        transform: [{ rotate: "180deg" }],
        borderBottomColor: "green",
    },
});
