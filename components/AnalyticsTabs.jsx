"use client";

import { useState } from "react";

// The "Reports" mock screen with 3 tabs (Campaigns / Conversations / Team).
// All three panels stay in the page and we just hide two of them, so the
// number count-up animation still works for every tab.
export default function AnalyticsTabs() {
  const [tab, setTab] = useState("c");

  return (
    <div className="mt-12 ui rv" data-anim="">
      <div className="ui-bar">
        <i />
        <i />
        <i />
        <span className="ml-3 text-xs font-semibold text-[#6B7C8C]">Reports</span>
        <div className="ml-auto flex gap-1 text-[11px] font-bold" id="atabs">
          <button className={tab === "c" ? "px-2.5 py-1 rounded-md bg-[#0A1A24] text-white" : "px-2.5 py-1 rounded-md text-[#6B7C8C]"} onClick={() => setTab("c")}>Campaigns</button>
          <button className={tab === "v" ? "px-2.5 py-1 rounded-md bg-[#0A1A24] text-white" : "px-2.5 py-1 rounded-md text-[#6B7C8C]"} onClick={() => setTab("v")}>Conversations</button>
          <button className={tab === "t" ? "px-2.5 py-1 rounded-md bg-[#0A1A24] text-white" : "px-2.5 py-1 rounded-md text-[#6B7C8C]"} onClick={() => setTab("t")}>Team</button>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className={`grid gap-4 ${tab === "c" ? "" : "hidden"}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Messages Sent</div>
              <b className="display text-2xl" data-count="48600">0</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Messages Delivered</div>
              <b className="display text-2xl" data-count="47530">0</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Messages Read</div>
              <b className="display text-2xl" data-count="38920">0</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4 bg-[#ECFBF4]">
              <div className="text-xs text-[#067955] font-semibold">Customer Responses</div>
              <b className="display text-2xl text-[#067955]" data-count="8214">0</b>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs font-bold">Campaign Engagement</div>
              <svg viewBox="0 0 300 100" className="w-full h-28 mt-2">
                <path d="M0 80 C40 70 70 50 110 55 S170 30 210 28 S270 12 300 10" fill="none" stroke="#0FAF7A" strokeWidth="3" />
                <path d="M0 90 C60 85 110 78 160 72 S250 60 300 55" fill="none" stroke="#2F6BFF" strokeWidth="2" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs font-bold mb-3">Campaign Performance</div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <b>Summer Offer</b>
                    <span>23% replies</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ "--w": "84%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <b>Showroom Launch</b>
                    <span>19%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ "--w": "68%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <b>We Miss You</b>
                    <span>15%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ "--w": "52%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`grid gap-4 ${tab === "v" ? "" : "hidden"}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Total Conversations</div>
              <b className="display text-2xl">6,412</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">New Conversations</div>
              <b className="display text-2xl">1,208</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Active Conversations</div>
              <b className="display text-2xl">342</b>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs text-[#6B7C8C] font-semibold">Resolved Conversations</div>
              <b className="display text-2xl">5,870</b>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs font-bold">AI vs Human Agent Conversations</div>
              <div className="mt-4 h-4 rounded-full overflow-hidden flex">
                <i className="bg-[#0FAF7A]" style={{ width: "64%" }} />
                <i className="bg-[#2F6BFF]" style={{ width: "36%" }} />
              </div>
              <div className="flex justify-between text-xs mt-2">
                <span>
                  <i className="inline-block w-2 h-2 rounded-full bg-[#0FAF7A]" />
                  {" "}AI Conversations 64%
                </span>
                <span>
                  <i className="inline-block w-2 h-2 rounded-full bg-[#2F6BFF]" />
                  {" "}Human Agent 36%
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-[#E6ECF0] p-4">
              <div className="text-xs font-bold">Customer Response Activity (by hour)</div>
              <div className="flex items-end gap-1 h-20 mt-3">
                <i className="flex-1 rounded-sm bg-[#D7F3E6] h-[20%]" />
                <i className="flex-1 rounded-sm bg-[#B5EAD2] h-[35%]" />
                <i className="flex-1 rounded-sm bg-[#7ED9B2] h-[60%]" />
                <i className="flex-1 rounded-sm bg-[#3DC592] h-[85%]" />
                <i className="flex-1 rounded-sm bg-[#0FAF7A] h-full" />
                <i className="flex-1 rounded-sm bg-[#3DC592] h-[75%]" />
                <i className="flex-1 rounded-sm bg-[#7ED9B2] h-[55%]" />
                <i className="flex-1 rounded-sm bg-[#3DC592] h-[80%]" />
                <i className="flex-1 rounded-sm bg-[#B5EAD2] h-[40%]" />
                <i className="flex-1 rounded-sm bg-[#D7F3E6] h-[25%]" />
              </div>
            </div>
          </div>
        </div>
        <div className={` ${tab === "t" ? "" : "hidden"}`}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-[13px]">
              <thead className="text-left text-[11px] uppercase tracking-wider text-[#6B7C8C]">
                <tr className="border-b border-[#E6ECF0]">
                  <th className="py-2.5">Agent Activity</th>
                  <th>Assigned Conversations</th>
                  <th>Response Times</th>
                  <th>Conversation Handling</th>
                  <th>Completed Conversations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#F0F3F5]">
                  <td className="py-3 font-semibold">Ahmed · Sales</td>
                  <td>142</td>
                  <td>1m 08s</td>
                  <td>
                    <div className="bar-track w-24">
                      <div className="bar-fill" style={{ width: "90%" }} />
                    </div>
                  </td>
                  <td>131</td>
                </tr>
                <tr className="border-b border-[#F0F3F5]">
                  <td className="py-3 font-semibold">Noura · Support</td>
                  <td>188</td>
                  <td>1m 34s</td>
                  <td>
                    <div className="bar-track w-24">
                      <div className="bar-fill" style={{ width: "82%" }} />
                    </div>
                  </td>
                  <td>176</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Karim · Accounts</td>
                  <td>76</td>
                  <td>2m 51s</td>
                  <td>
                    <div className="bar-track w-24">
                      <div className="bar-fill" style={{ width: "64%" }} />
                    </div>
                  </td>
                  <td>69</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
