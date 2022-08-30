const styles = {
  /// INDEX
  box: {
    width: "100%",
    height: 650,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },
  /// INBOX LIST
  inboxContainner: { maxWidth: 700, width: "35%", float: "left" },
  inboxContent: { width: "99%", maxWidth: 400, bgcolor: "background.paper" },
  /// MESSAGE VIEW
  messageContainner: { maxWidth: 700, width: "75%" },
  messageContent: { maxHeight: "100%", overflow: "auto" },
  messageCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },
  message: {
    marginTop: 5,
    fontSize: 16,
    padding: 4,
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
    textAlign: "center",
  },
  cardActions: {
    margin: "auto",
    width: "100%",
    marginBottom: 0,
  },
};
export default styles;
