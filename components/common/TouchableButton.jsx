import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View
} from "react-native";

const TouchableButton = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = "left",
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[size]];

    switch (variant) {
      case "primary":
        baseStyle.push(styles.primary);
        break;
      case "secondary":
        baseStyle.push(styles.secondary);
        break;
      case "outline":
        baseStyle.push(styles.outline);
        break;
      case "wishlist":
        baseStyle.push(styles.wishlist);
        break;
      case "danger":
        baseStyle.push(styles.danger);
        break;
      default:
        baseStyle.push(styles.primary);
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle = [styles.text, styles[`${size}Text`]];

    switch (variant) {
      case "primary":
        baseTextStyle.push(styles.primaryText);
        break;
      case "secondary":
        baseTextStyle.push(styles.secondaryText);
        break;
      case "outline":
        baseTextStyle.push(styles.outlineText);
        break;
      case "wishlist":
        baseTextStyle.push(styles.wishlistText);
        break;
      case "danger":
        baseTextStyle.push(styles.dangerText);
        break;
      default:
        baseTextStyle.push(styles.primaryText);
    }

    if (disabled) {
      baseTextStyle.push(styles.disabledText);
    }

    return baseTextStyle;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="small"
            color={variant === "outline" ? "#007AFF" : "#FFFFFF"}
          />
          <Text style={[getTextStyle(), styles.loadingText]}>Loading...</Text>
        </View>
      );
    }

    if (icon && iconPosition === "left") {
      return (
        <View style={styles.contentContainer}>
          {icon}
          <Text style={[getTextStyle(), textStyle]}>
            {title}
          </Text>
        </View>
      );
    }

    if (icon && iconPosition === "right") {
      return (
        <View style={styles.contentContainer}>
          <Text style={[getTextStyle(), textStyle]}>
            {title}
          </Text>
          {icon}
        </View>
      );
    }

    return (
      <Text style={[getTextStyle(), textStyle]}>
        {title}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  // Sizes
  small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    minHeight: 36
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    minHeight: 44
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 52
  },

  // Variants
  primary: {
    backgroundColor: "#007AFF"
  },
  secondary: {
    backgroundColor: "#34C759"
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF"
  },
  wishlist: {
    backgroundColor: "#FF3B30"
  },
  danger: {
    backgroundColor: "#FF3B30"
  },
  disabled: {
    backgroundColor: "#E5E5EA",
    borderColor: "#E5E5EA"
  },

  // Text styles
  text: {
    fontWeight: "600",
    textAlign: "center"
  },
  smallText: {
    fontSize: 14
  },
  mediumText: {
    fontSize: 16
  },
  largeText: {
    fontSize: 18
  },

  // Text colors
  primaryText: {
    color: "#FFFFFF"
  },
  secondaryText: {
    color: "#FFFFFF"
  },
  outlineText: {
    color: "#007AFF"
  },
  wishlistText: {
    color: "#FFFFFF"
  },
  dangerText: {
    color: "#FFFFFF"
  },
  disabledText: {
    color: "#8E8E93"
  },

  // Content layout
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  loadingText: {
    marginLeft: 4
  }
});

export default TouchableButton;

// Usage Examples:

/*
// Add to Cart Button
<TouchableButton
  title="Add to Cart"
  variant="primary"
  size="medium"
  onPress={() => console.log('Add to cart pressed')}
  icon={<CartIcon />}
/>

// Buy Now Button
<TouchableButton
  title="Buy Now"
  variant="secondary"
  size="large"
  onPress={() => console.log('Buy now pressed')}
/>

// Wishlist Button
<TouchableButton
  title="Add to Wishlist"
  variant="wishlist"
  size="medium"
  onPress={() => console.log('Wishlist pressed')}
  icon={<HeartIcon />}
/>

// Loading State
<TouchableButton
  title="Processing..."
  variant="primary"
  loading={true}
  disabled={true}
/>

// Outline Button
<TouchableButton
  title="Add to Cart"
  variant="outline"
  size="medium"
  onPress={() => console.log('Outline button pressed')}
/>

// With custom styling
<TouchableButton
  title="Custom Button"
  variant="primary"
  style={{ marginTop: 20, borderRadius: 20 }}
  textStyle={{ fontSize: 18, fontWeight: 'bold' }}
  onPress={() => console.log('Custom button pressed')}
/>
*/