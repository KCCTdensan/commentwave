import Twemoji from "react-twemoji"

const Emoji = ({ className = "w-4", children }) => (
  <Twemoji
    options={{
      className,
      noWrapper: true,
    }}>
    {children}
  </Twemoji>
)

export default Emoji
