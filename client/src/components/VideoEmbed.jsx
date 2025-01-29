const VideoEmbed = () => {
    return (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/802157021?h=94e9939361&loop=1&title=0&byline=0&portrait=0&background=1"
                height="360"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            ></iframe>
        </div>
    );
};

export default VideoEmbed;