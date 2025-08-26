'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/track')
            .then(res => res.json())
            .then(data => setCount(data.count))
            .catch(() => setCount(null));
    }, []);

    return (
        <p className="text-sm font-semibold uppercase mt-4">
            {count !== null ? `Unique Visitors: ${count}` : 'Loading...'}
        </p>
    );
}