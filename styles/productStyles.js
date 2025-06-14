import { StyleSheet } from "react-native";

export default (productStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginVertical: 10,
    marginHorizontal: 12,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#fdfcff",
  },
  category: {
    fontSize: 13,
    fontWeight: "600",
    color: "#7a7a7a",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222222",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6a1b9a",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: "#aaa",
    textDecorationLine: "line-through",
  },
  discountBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#e53935",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    zIndex: 2,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  tag: {
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    zIndex: 2,
  },
  tagdefault: {
    backgroundColor: "#007AFF",
  },
  tagTextdefault: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  tagnew: {
    backgroundColor: "#34C759",
  },
  tagTextnew: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  tagsale: {
    backgroundColor: "#FF9500",
  },
  tagTextsale: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  tagfeatured: {
    backgroundColor: "#AF52DE",
  },
  tagTextfeatured: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  colorsContainer: {
    marginTop: 10,
  },
  colorsLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  colorsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorOption: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "#dcdcdc",
    justifyContent: "center",
    alignItems: "center",
  },
  colorName: {
    fontSize: 10,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
}));
