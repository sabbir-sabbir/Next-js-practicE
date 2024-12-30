export default function DashBoardLayout({children, users, notifications, revenue}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode
}) {
    return (
        <>
        <div>{children}</div>
        </>
    )
}

