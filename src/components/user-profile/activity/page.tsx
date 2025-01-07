export default function Activity() {
    return (
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-gray-600">Logged in from IP: 192.168.1.1</span>
              <span className="text-sm text-gray-400">Just now</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-600">Updated profile information</span>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-gray-600">Changed password</span>
              <span className="text-sm text-gray-400">Yesterday</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  