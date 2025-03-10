"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function InOfficeWork() {
    return (
        <div className="flex flex-col gap-6 p-8 justify-between">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-500">On-site work</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    I can currently only apply for a German work visa through the Opportunity Card program. If you are in other countries and interested in me, I will likely need a work permit.
                </p>
            </div>

            <div className="space-y-6">

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <p>
                        <FaLocationArrow className="text-2xl text-purple-500" />
                    </p>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Hybrid Setup</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Open to hybrid work arrangements, combining the benefits of remote
                            work with meaningful in-person collaboration. If you have any concerns, you can hire me as a remote worker initially. If you&apos;re satisfied with my performance, we can then proceed to apply for a work visa.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <p>
                        <FaLocationArrow className="text-2xl text-purple-500" />
                    </p>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">On-site Opportunities</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Available for on-site positions in Europe, North America and Singapore. Ready to start a new stage of my life. Willing to embrace the challenges and overcome them.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <p>
                        <FaLocationArrow className="text-2xl text-purple-500" />
                    </p>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Culture</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            I respect various cultures and actively seek to integrate into them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
