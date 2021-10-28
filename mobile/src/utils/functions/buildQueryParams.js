const buildQueryParams = (values) => {
    const cleaned = Object.entries(values).reduce(
        (acc, [cur, val]) => (val !== undefined || val !== null ? ((acc[cur] = val), acc) : acc),
        {}
    );
    return Object.entries(cleaned)
        .map((pair) => pair.map(encodeURIComponent).join('='))
        .join('&');
};

export default buildQueryParams;
