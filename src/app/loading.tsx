export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative">
                {/* Spinner */}
                <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-[#8B0000] border-t-transparent"></div>

                {/* Logo or text in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold text-[#030229]">Home Care Alliance Africa</div>
                        <div className="text-sm text-gray-600">HOCA Africa</div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="mt-6 text-center">
                    <p className="text-lg font-medium text-[#030229]">Loading...</p>
                    <p className="mt-2 text-sm text-gray-500">Building Africa's future of elder care</p>
                </div>
            </div>
        </div>
    );
}