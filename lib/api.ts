const API_URL = 'https://api.twitch.tv/helix';

export async function getUserId(login: string): Promise<any> {
    const response = await fetch(`${API_URL}/users?login=${login}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
            'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
        },
    });

    if (response.ok) return response.json();
    if (response.status === 404) return {};

    throw new Error(
        `Fetch for the "${login}" failed with code: ${response.status}`,
    );
}

export async function getVideos(userId: string): Promise<any> {
    const response = await fetch(`${API_URL}/videos?user_id=${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
            'Client-Id': `${process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID}`,
        },
    });

    if (response.ok) return response.json();
    if (response.status === 404) return {};

    throw new Error(
        `Fetch for the "${userId}" failed with code: ${response.status}`,
    );
}
