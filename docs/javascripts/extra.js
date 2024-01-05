function prefer(mirror_provider) {
    let key = '/.__tabs';
    const tabs = localStorage.getItem(key);
    if (!tabs) {
        localStorage.setItem(key, JSON.stringify([mirror_provider]));
    } else {
        const filtered = JSON.parse(tabs).filter(
            (item) => item !== mirror_provider
        );
        localStorage.setItem(
            key,
            JSON.stringify([mirror_provider, ...filtered])
        );
    }
}
