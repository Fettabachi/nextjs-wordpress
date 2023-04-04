export const Columns = ({
    isStackedOnMobile,
    children,
    textColor,
    backgroundColor,
}) => {
    const textColorStyle = textColor ? { color: textColor } : {};
    console.log("textColorStyle ", textColorStyle);
    const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
    return (
        <div
            className="my-10"
            style={{ ...textColorStyle, ...backgroundColorStyle }}
        >
            <div
                className={`max-w-5xl mx-auto ${
                    isStackedOnMobile ? "block md:flex" : "flex"
                }`}
            >
                {children}
            </div>
        </div>
    );
};
