// pollinations.ai text based prompt and text based answer
// async function test(){
//   const response = await fetch(
//   "https://gen.pollinations.ai/text/what is sachin tendulkars sons age ?model=openai",
//   { headers: { Authorization: "Bearer sk_7u12pDcu6Ge6x4HblrwX4AJejQWg9IoK" } },
// );
// console.log(await response.text());
// }
// test()


const { NseIndia } = require('stock-nse-india');
const nseIndia = new NseIndia();

// const nse = new NseIndia();

// // REST API endpoint to get equity details
// app.get('/api/stock/:symbol', async (req, res) => {
//     try {
//         const symbol = req.params.symbol.toUpperCase();
//         const data = await nse.getEquityDetails(symbol);
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: 'Stock not found or market is closed' });
//     }
// });

async function getCustomNseData() {
  try {
    // Define the specific NSE endpoint you want to hit
    // Example: Fetching market status details
    // const endpoint = '/api/marketStatus';
    // Example: Fetching market /api/equity-master details
    // const endpoint = '/api/equity-master';

    const endpoint = '/api/market-data-words';

    console.log(`Fetching data from endpoint: ${endpoint}...`);
    
    // Use the public generic wrapper method provided by the library
    const data = await nseIndia.getDataByEndpoint(endpoint);
    
    // Output the resulting JSON object
    console.log("Market Status Data:", JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error("Error retrieving data from NSE:", error);
  }
}

getCustomNseData();





// import { NseIndia } from "stock-nse-india";


// ======= function to get worldcup 26 matches result ====== 

async function getWorldCupMatchData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json');
    
    // Check if the HTTP status code is 200-299
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON body
    console.log(data);
  } catch (error) {
    console.error('Fetch failed:', error.message);
  }
}

getWorldCupMatchData();


// get most active nse shares
async function fetchActiveEquities() {
    try {
        console.log("Fetching market data from NSE...");
        
        // Request the standard NIFTY 50 index data
        const indexData = await nseIndia.getEquityStockIndices("NIFTY 50");
        
        // The library responds with an object containing a 'data' array
        const equities = indexData.data;

        // Sort the response array by total traded volume in descending order
        const mostActiveByVolume = [...equities].sort((a, b) => 
            b.totalTradedVolume - a.totalTradedVolume
        );

        console.log("--- TOP 3 MOST ACTIVE EQUITIES BY VOLUME ---");
        console.log(JSON.stringify(mostActiveByVolume.slice(0, 3), null, 2));

    } catch (error) {
        console.error("Failed to retrieve market data:", error);
    }
}

fetchActiveEquities();


// get nse top gainers and top loosers 
async function getGainersAndLosers() {
    try {
        console.log("Downloading market data directly from NSE...");
        
        // Fetch the full data package for the specified index
        const indexData = await nseIndia.getEquityStockIndices("NIFTY 50");
        const equities = indexData.data;

        // 1. Filter out the index identifier entry itself (if present)
        const stocksOnly = equities.filter(stock => stock.symbol !== "NIFTY 50");

        // 2. Sort descending by percentage change to extract Top Gainers
        const topGainers = [...stocksOnly]
            .sort((a, b) => b.pChange - a.pChange)
            .slice(0, 5); // Change 5 to any number of positions you need

        // 3. Sort ascending by percentage change to extract Top Losers
        const topLosers = [...stocksOnly]
            .sort((a, b) => a.pChange - b.pChange)
            .slice(0, 5);

        // Print Results
        console.log("\n📈 TOP 5 GAINERS:");
        topGainers.forEach((s, idx) => {
            console.log(`${idx + 1}. ${s.symbol}: ₹${s.lastPrice} (+${s.pChange}%)`);
        });

        console.log("\n📉 TOP 5 LOSERS:");
        topLosers.forEach((s, idx) => {
            console.log(`${idx + 1}. ${s.symbol}: ₹${s.lastPrice} (${s.pChange}%)`);
        });

    } catch (error) {
        console.error("Failed to calculate gainers and losers:", error);
    }
}

getGainersAndLosers();


//current apo data
async function getLiveIpoData() {
    try {
        console.log("Fetching live IPO data from active NSE channels...");

        // FIX 1: Mainboard Corporate Public Issues & IPOs
        const mainBoardIpo = await nseIndia.getDataByEndpoint("/api/ipo-current-issue");
        console.log("\n================ MAINBOARD IPO DATA ================");
        console.log(JSON.stringify(mainBoardIpo, null, 2));

    } catch (error) {
        console.log("Mainboard route failed, attempting fallback context...");
        try {
            // FIX 2: Alternative fallback path for Broad Public Issues
            const publicIssues = await nseIndia.getDataByEndpoint("/api/live-analysis-public-issues");
            console.log(JSON.stringify(publicIssues, null, 2));
        } catch (fallbackError) {
            console.error("404 Persistent Error: Both API paths have changed structure on NSE.");
        }
    }
}

getLiveIpoData();


//current apo data
async function getLiveIpoData() {
    try {
        console.log("Fetching live IPO data from active NSE channels...");

        // FIX 1: Mainboard Corporate Public Issues & IPOs
        const mainBoardIpo = await nseIndia.getDataByEndpoint("/api/sme-public-issues");
        console.log("\n================ MAINBOARD IPO DATA ================");
        console.log(JSON.stringify(mainBoardIpo, null, 2));

    } catch (error) {
        console.log("Mainboard route failed, attempting fallback context...");
        try {
            // FIX 2: Alternative fallback path for Broad Public Issues
            const publicIssues = await nseIndia.getDataByEndpoint("/api/live-analysis-public-issues");
            console.log(JSON.stringify(publicIssues, null, 2));
        } catch (fallbackError) {
            console.error("404 Persistent Error: Both API paths have changed structure on NSE.");
        }
    }
}

getLiveIpoData();


//current apo data
async function getLiveIpoData() {
    try {
        console.log("Fetching live IPO data from active NSE channels...");

        // FIX 1: Mainboard Corporate Public Issues & IPOs
        const mainBoardIpo = await nseIndia.getDataByEndpoint("/api/sme-public-issues");
        console.log("\n================ MAINBOARD IPO DATA ================");
        console.log(JSON.stringify(mainBoardIpo, null, 2));

    } catch (error) {
        console.log("Mainboard route failed, attempting fallback context...");
        try {
            // FIX 2: Alternative fallback path for Broad Public Issues
            const publicIssues = await nseIndia.getDataByEndpoint("/api/live-analysis-public-issues");
            console.log(JSON.stringify(publicIssues, null, 2));
        } catch (fallbackError) {
            console.error("404 Persistent Error: Both API paths have changed structure on NSE.");
        }
    }
}

getLiveIpoData();


const YahooFinance = require('yahoo-finance2').default;

// Instantiate the class instance manually
const yahooFinance = new YahooFinance();

async function fetchBseStockDetails(ticker) {
    try {
        console.log(`Connecting to public directory for BSE security: ${ticker}...`);
        
        // Execute the quote query using your instantiated object
        const quote = await yahooFinance.quote(ticker);

        console.log("\n================ BSE STOCK DETAILS ================");
        console.log(`Company Name   : ${quote.longName}`);
        console.log(`BSE Ticker     : ${quote.symbol}`);
        console.log(`Currency       : ${quote.currency}`);
        console.log(`Current Price  : ₹${quote.regularMarketPrice}`);
        console.log(`Previous Close : ₹${quote.regularMarketPreviousClose}`);
        console.log(`Day's Open     : ₹${quote.regularMarketOpen}`);
        console.log(`Day's High     : ₹${quote.regularMarketDayHigh}`);
        console.log(`Day's Low      : ₹${quote.regularMarketDayLow}`);
        console.log(`Traded Volume  : ${quote.regularMarketVolume}`);
        console.log(`Change (%)     : ${quote.regularMarketChangePercent?.toFixed(2)}%`);
        console.log(`52-Week High   : ₹${quote.fiftyTwoWeekHigh}`);
        console.log(`52-Week Low    : ₹${quote.fiftyTwoWeekLow}`);
        console.log("===================================================\n");

    } catch (error) {
        console.error(`❌ Failed to retrieve BSE stock data:`, error.message);
    }
}

// Target BSE using the mandatory '.BO' suffix
fetchBseStockDetails('RELIANCE.BO');


const YahooFinance = require('yahoo-finance2').default;

// Instantiate the class instance manually
const yahooFinance = new YahooFinance();

async function fetchBseWatchlist() {
    const portfolio = ['TCS.BO', 'INFY.BO', 'HDFCBANK.BO'];
    try {
        const results = await yahooFinance.quote(portfolio);
        
        console.log("--- BATCH PORTFOLIO RESULTS ---");
        results.forEach(stock => {
            console.log(`${stock.shortName} (${stock.symbol}): ₹${stock.regularMarketPrice} [${stock.regularMarketChangePercent?.toFixed(2)}%]`);
            console.log("===== stock sdetails : ", stock);

          });
    } catch (err) {
        console.error("Batch query error:", err.message);
    }
}
fetchBseWatchlist();


//===================================================



const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

// 1. Define your mock investment ledger database
// Add .NS for National Stock Exchange and .BO for Bombay Stock Exchange
const myPortfolio = [
    { symbol: 'RELIANCE.NS', purchasePrice: 2450.00, quantity: 15 },
    { symbol: 'TCS.NS',      purchasePrice: 3800.00, quantity: 10 },
    { symbol: 'INFY.BO',     purchasePrice: 1420.00, quantity: 25 },
    { symbol: 'HDFCBANK.BO', purchasePrice: 1650.00, quantity: 30 }
];

async function trackPortfolioPerformance() {
    try {
        console.log("Fetching live exchange quotes to update portfolio...");
        
        // Extract array of symbols for batch processing
        const symbols = myPortfolio.map(item => item.symbol);
        const liveQuotes = await yahooFinance.quote(symbols);
        
        // Normalize response to array form
        const quotesArray = Array.isArray(liveQuotes) ? liveQuotes : [liveQuotes];
        
        // Map live data by symbol string for fast O(1) hash table lookup
        const quoteMap = new Map(quotesArray.map(q => [q.symbol, q]));

        let totalInvestment = 0;
        let totalCurrentValue = 0;

        console.log("\n================================== PORTFOLIO DASHBOARD ==================================");
        console.log(
            String("STOCK").padEnd(14) + 
            String("QTY").padEnd(6) + 
            String("AVG PRICE").padEnd(12) + 
            String("LIVE PRICE").padEnd(12) + 
            String("INVESTED").padEnd(12) + 
            String("CURRENT VAL").padEnd(14) + 
            String("PROFIT / LOSS")
        );
        console.log("-----------------------------------------------------------------------------------------");

        myPortfolio.forEach(asset => {
            const liveData = quoteMap.get(asset.symbol);
            if (!liveData) {
                console.log(`⚠️ Market data missing for ticker: ${asset.symbol}`);
                return;
            }

            const currentPrice = liveData.regularMarketPrice;
            const investedAmount = asset.purchasePrice * asset.quantity;
            const currentAmount = currentPrice * asset.quantity;
            
            const pnlAbsolute = currentAmount - investedAmount;
            const pnlPercentage = (pnlAbsolute / investedAmount) * 100;

            // Increment totals
            totalInvestment += investedAmount;
            totalCurrentValue += currentAmount;

            // Format profit/loss visual indicator symbol string
            const pnlSign = pnlAbsolute >= 0 ? "+" : "";
            const pnlString = `${pnlSign}₹${pnlAbsolute.toFixed(2)} (${pnlSign}${pnlPercentage.toFixed(2)}%)`;

            console.log(
                asset.symbol.padEnd(14) +
                String(asset.quantity).padEnd(6) +
                `₹${asset.purchasePrice.toFixed(2)}`.padEnd(12) +
                `₹${currentPrice.toFixed(2)}`.padEnd(12) +
                `₹${investedAmount.toFixed(2)}`.padEnd(12) +
                `₹${currentAmount.toFixed(2)}`.padEnd(14) +
                pnlString
            );
        });

        // 2. Compute net overall ledger health summaries
        const totalPnlAbsolute = totalCurrentValue - totalInvestment;
        const totalPnlPercentage = (totalPnlAbsolute / totalInvestment) * 100;
        const summarySign = totalPnlAbsolute >= 0 ? "+" : "";

        console.log("-----------------------------------------------------------------------------------------");
        console.log(`TOTAL INVESTED CAPITAL : ₹${totalInvestment.toFixed(2)}`);
        console.log(`TOTAL CURRENT VALUE    : ₹${totalCurrentValue.toFixed(2)}`);
        console.log(`NET UNREALISED P&L     : ${summarySign}₹${totalPnlAbsolute.toFixed(2)} (${summarySign}${totalPnlPercentage.toFixed(2)}%)`);
        console.log("=========================================================================================\n");

    } catch (error) {
        console.error("❌ Portfolio calculation failed:", error.message);
    }
}

// 3. Trigger tracking loop execution
trackPortfolioPerformance();

//=======================================================


const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchCompanyFinancials(ticker) {
    try {
        console.log(`Connecting to public records to fetch financial statements for ${ticker}...`);

        // Specify the exact sub-modules inside the configuration object
        const queryOptions = {
            modules: [
                'incomeStatementHistory', 
                'balanceSheetHistory', 
                'cashflowStatementHistory'
            ]
        };

        // FIX: Use quoteSummary instead of modules
        const result = await yahooFinance.quoteSummary(ticker, queryOptions);

        console.log(`\n=================== FINANCIAL REPORT: ${ticker} ===================`);

        // 1. EXTRACT INCOME STATEMENT HISTORY
        if (result.incomeStatementHistory?.incomeStatementHistory) {
            console.log("\n📈 INCOME STATEMENT HISTORY (Annual):");
            result.incomeStatementHistory.incomeStatementHistory.forEach(period => {
                const dateStr = period.endDate ? new Date(period.endDate).toLocaleDateString() : 'N/A';
                console.log(`--- Fiscal Year Ending: ${dateStr} ---`);
                console.log(`  Total Revenue : ₹${(period.totalRevenue / 10000000).toFixed(2)} Cr`);
                console.log(`  Gross Profit  : ₹${(period.grossProfit / 10000000).toFixed(2)} Cr`);
                console.log(`  Net Income    : ₹${(period.netIncome / 10000000).toFixed(2)} Cr`);
            });
        }

        // 2. EXTRACT BALANCE SHEET HISTORY
        if (result.balanceSheetHistory?.balanceSheetHistory) {
            console.log("\n⚖️ BALANCE SHEET HISTORY (Annual):");
            result.balanceSheetHistory.balanceSheetHistory.forEach(period => {
                const dateStr = period.endDate ? new Date(period.endDate).toLocaleDateString() : 'N/A';
                console.log(`--- Fiscal Year Ending: ${dateStr} ---`);
                console.log(`  Total Assets      : ₹${(period.totalAssets / 10000000).toFixed(2)} Cr`);
                console.log(`  Total Liabilities : ₹${(period.totalLiab / 10000000).toFixed(2)} Cr`);
                console.log(`  Stockholder Equity: ₹${(period.totalStockholderEquity / 10000000).toFixed(2)} Cr`);
            });
        }

        console.log("\n==================================================================");

    } catch (error) {
        console.error(`❌ Failed to retrieve financial modules:`, error.message);
    }
}

// Fetch financial statements for an Indian company (e.g., Reliance on NSE)
fetchCompanyFinancials('RELIANCE.NS');

//======================================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchKeyValuations(ticker) {
    try {
        const stats = await yahooFinance.quoteSummary(ticker, { 
            modules: ['summaryDetail', 'defaultKeyStatistics', 'financialData'] 
        });
        
        console.log(`--- Valuation Stats for ${ticker} ---`);
        console.log(`P/E Ratio         : ${stats.summaryDetail?.trailingPE || 'N/A'}`);
        console.log(`Price to Book (P/B): ${stats.defaultKeyStatistics?.priceToBook || 'N/A'}`);
        console.log(`Return on Equity  : ${(stats.financialData?.returnOnEquity * 100).toFixed(2)}%`);
        console.log(`Total Cash on Hand: ₹${(stats.financialData?.totalCash / 10000000).toFixed(2)} Cr`);
    } catch (err) {
        console.error(err.message);
    }
}

fetchKeyValuations('TCS.NS');

//=============================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchPromoterHoldings(ticker) {
    try {
        console.log(`Querying shareholder registry metrics for: ${ticker}...`);

        // Request structural distribution breakdowns
        const queryOptions = {
            modules: ['majorHoldersBreakdown']
        };

        const summary = await yahooFinance.quoteSummary(ticker, queryOptions);
        const breakdown = summary.majorHoldersBreakdown;

        if (!breakdown) {
            console.log(`⚠️ Shareholding breakdown is unavailable for ${ticker}.`);
            return;
        }

        console.log(`\n================= SHAREHOLDING PATTERN: ${ticker} =================`);
        
        // Convert fractional decimals to clear percent allocations
        const promoterStake = breakdown.insidersPercentOfSharesOutstanding 
            ? (breakdown.insidersPercentOfSharesOutstanding * 100).toFixed(2) 
            : '0.00';

        const institutionStake = breakdown.institutionsPercentOfSharesOutstanding 
            ? (breakdown.institutionsPercentOfSharesOutstanding * 100).toFixed(2) 
            : '0.00';

        const mutualFundStake = breakdown.institutionsFloatPercentOfSharesOutstanding 
            ? (breakdown.institutionsFloatPercentOfSharesOutstanding * 100).toFixed(2) 
            : '0.00';

        // Calculate retail float allocation mathematically
        const retailPublicStake = (100 - parseFloat(promoterStake) - parseFloat(institutionStake)).toFixed(2);

        console.log(`Promoter Holding (Insiders)   : ${promoterStake}%`);
        console.log(`Institutional Allocation      : ${institutionStake}%`);
        console.log(`Mutual Funds / Free Float Inst: ${mutualFundStake}%`);
        console.log(`Retail & Public Shareholders  : ${retailPublicStake}%`);
        console.log("==================================================================\n");

    } catch (error) {
        console.error(`❌ Failed to fetch shareholder registry:`, error.message);
    }
}

// Request breakdown for Tata Consultancy Services on NSE
fetchPromoterHoldings('TCS.NS');

//=======================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchInsiderTransactions(ticker) {
    try {
        const stats = await yahooFinance.quoteSummary(ticker, { 
            modules: ['insiderTransactions'] 
        });

        console.log(`\n--- RECENT INSIDER TRANSACTIONS: ${ticker} ---`);
        if (stats.insiderTransactions?.transactions?.length > 0) {
            stats.insiderTransactions.transactions.slice(0, 5).forEach(tx => {
                console.log(`Officer: ${tx.filerName} (${tx.filerRelation})`);
                console.log(`Action : ${tx.transactionText} | Shares: ${tx.shares.toLocaleString()}`);
                console.log(`Date   : ${tx.startDate}\n`);
            });
        } else {
            console.log("No recent transaction logs reported in this tracking window.");
        }
    } catch (err) {
        console.error(err.message);
    }
}

fetchInsiderTransactions('RELIANCE.NS');


//====================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchMutualFundHolders(ticker) {
    try {
        const data = await yahooFinance.quoteSummary(ticker, { 
            modules: ['fundOwnership'] 
        });
        
        const funds = data.fundOwnership?.ownershipList;
        console.log(`\n--- TOP MUTUAL FUNDS HOLDING ${ticker} ---`);
        
        if (funds && funds.length > 0) {
            funds.slice(0, 5).forEach(f => {
                console.log(`• ${f.organization} (Shares: ${f.position.toLocaleString()})`);
            });
        } else {
            console.log("No retail mutual fund listings found.");
        }
    } catch (err) {
        console.error(err.message);
    }
}

fetchMutualFundHolders('TCS.NS');


//===========================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function fetchMutualFundHolders(ticker) {
    try {
        const data = await yahooFinance.quoteSummary(ticker, { 
            modules: ['fundOwnership'] 
        });
        
        const funds = data.fundOwnership?.ownershipList;
        console.log(`\n--- TOP MUTUAL FUNDS HOLDING ${ticker} ---`);
        
        if (funds && funds.length > 0) {
            funds.slice(0, 5).forEach(f => {
                console.log(`• ${f.organization} (Shares: ${f.position.toLocaleString()})`);
            });
        } else {
            console.log("No retail mutual fund listings found.");
        }
    } catch (err) {
        console.error(err.message);
    }
}

fetchMutualFundHolders('RELIANCE.NS');

//==============================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();


async function findSimilarStocks(ticker) {
    try {
        console.log(`Analyzing market correlations to find peers for: ${ticker}...`);

        // Use the dedicated recommendations module
        const recommendations = await yahooFinance.recommendationsBySymbol(ticker);
        
        if (!recommendations || !recommendations.recommendedSymbols || recommendations.recommendedSymbols.length === 0) {
            console.log(`ℹ️ No direct peer recommendations found for ${ticker}.`);
            return;
        }

        // Extract the suggested peer tickers from the response payload
        const peerTickers = recommendations.recommendedSymbols.map(item => item.symbol);
        
        console.log(`\nFound ${peerTickers.length} similar stocks. Fetching live snapshot data...`);

        // Batch query live details for the discovered peer stocks
        const liveQuotes = await yahooFinance.quote(peerTickers);
        const quotesArray = Array.isArray(liveQuotes) ? liveQuotes : [liveQuotes];

        console.log(`\n=================== PEER COMPARISON TO: ${ticker} ===================`);
        console.log(
            String("TICKER").padEnd(14) + 
            String("COMPANY NAME").padEnd(35) + 
            String("PRICE").padEnd(14) + 
            String("CHANGE (%)")
        );
        console.log("-----------------------------------------------------------------------------");

        quotesArray.forEach(stock => {
            console.log(
                stock.symbol.padEnd(14) + 
                (stock.shortName || 'Unknown').substring(0, 32).padEnd(35) + 
                `₹${stock.regularMarketPrice.toFixed(2)}`.padEnd(14) + 
                `${stock.regularMarketChangePercent?.toFixed(2)}%`
            );
        });
        console.log("=============================================================================\n");

    } catch (error) {
        console.error(`❌ Failed to retrieve similar stocks:`, error.message);
    }
}

// Find peer recommendations for Infosys (NSE)
findSimilarStocks('INFY.NS');

//===========================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();


async function findUndervaluedPeers(targetTicker) {
    try {
        console.log(`1. Fetching peer recommendations for ${targetTicker}...`);
        const recommendations = await yahooFinance.recommendationsBySymbol(targetTicker);
        
        if (!recommendations || !recommendations.recommendedSymbols || recommendations.recommendedSymbols.length === 0) {
            console.log(`ℹ️ No peers found for ${targetTicker}.`);
            return;
        }

        // Collect all symbols (Target stock + recommended peers)
        const peerTickers = recommendations.recommendedSymbols.map(item => item.symbol);
        const allTickers = [targetTicker, ...peerTickers];

        console.log(`2. Fetching P/E ratios for all ${allTickers.length} assets...`);
        
        // Fetch valuation modules for the entire batch
        const summaryResults = await Promise.all(
            allTickers.map(async (ticker) => {
                try {
                    const summary = await yahooFinance.quoteSummary(ticker, { modules: ['summaryDetail', 'price'] });
                    return {
                        symbol: ticker,
                        name: summary.price?.shortName || 'Unknown',
                        pe: summary.summaryDetail?.trailingPE || null,
                        price: summary.summaryDetail?.regularMarketPrice || null
                    };
                } catch {
                    return null; // Gracefully skip symbols with missing data
                }
            })
        );

        // Filter out null records and separate target from peers
        const validRecords = summaryResults.filter(r => r !== null);
        const targetStock = validRecords.find(r => r.symbol === targetTicker);
        const peerStocks = validRecords.filter(r => r.symbol !== targetTicker);

        if (!targetStock || !targetStock.pe) {
            console.log(`❌ Target stock ${targetTicker} does not have a valid trailing P/E ratio. Cannot compare.`);
            return;
        }

        const targetPE = targetStock.pe;
        console.log(`\n🎯 TARGET: ${targetStock.name} (${targetStock.symbol}) | Live P/E: ${targetPE.toFixed(2)}`);

        // 3. Filter down to peers with a LOWER P/E ratio
        const undervaluedPeers = peerStocks.filter(peer => peer.pe !== null && peer.pe < targetPE);

        console.log(`\n=================== COMPETING PEERS WITH LOWER P/E RATIOS ===================`);
        if (undervaluedPeers.length === 0) {
            console.log("ℹ️ No recommended peer stocks are trading at a lower P/E ratio than the target.");
        } else {
            console.log(
                String("TICKER").padEnd(14) + 
                String("COMPANY NAME").padEnd(35) + 
                String("PRICE").padEnd(14) + 
                String("P/E RATIO")
            );
            console.log("-----------------------------------------------------------------------------");
            
            // Sort by P/E ratio ascending (cheapest first)
            undervaluedPeers.sort((a, b) => a.pe - b.pe).forEach(peer => {
                console.log(
                    peer.symbol.padEnd(14) + 
                    peer.name.substring(0, 32).padEnd(35) + 
                    `₹${peer.price?.toFixed(2)}`.padEnd(14) + 
                    peer.pe.toFixed(2)
                );
            });
        }
        console.log("=============================================================================\n");

    } catch (error) {
        console.error(`❌ Evaluation loop failed:`, error.message);
    }
}

// Evaluate peers for Infosys (NSE) compared against its current P/E matrix
findUndervaluedPeers('INFY.NS');

//==================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();


// Define a minimum volume threshold (e.g., at least 50,000 shares traded daily)
const MIN_VOLUME_THRESHOLD = 50000;

async function findLiquidUndervaluedPeers(targetTicker) {
    try {
        console.log(`1. Fetching peer recommendations for ${targetTicker}...`);
        const recommendations = await yahooFinance.recommendationsBySymbol(targetTicker);
        
        if (!recommendations || !recommendations.recommendedSymbols || recommendations.recommendedSymbols.length === 0) {
            console.log(`ℹ️ No peers found for ${targetTicker}.`);
            return;
        }

        const peerTickers = recommendations.recommendedSymbols.map(item => item.symbol);
        const allTickers = [targetTicker, ...peerTickers];

        console.log(`2. Fetching P/E ratios and volume data for all ${allTickers.length} assets...`);
        
        const summaryResults = await Promise.all(
            allTickers.map(async (ticker) => {
                try {
                    // Pull summaryDetail to get P/E, volume, and average 10-day volume metrics
                    const summary = await yahooFinance.quoteSummary(ticker, { modules: ['summaryDetail', 'price'] });
                    return {
                        symbol: ticker,
                        name: summary.price?.shortName || 'Unknown',
                        pe: summary.summaryDetail?.trailingPE || null,
                        price: summary.summaryDetail?.regularMarketPrice || null,
                        volume: summary.summaryDetail?.regularMarketVolume || 0,
                        avgVolume: summary.summaryDetail?.averageDailyVolume10Day || 0
                    };
                } catch {
                    return null; 
                }
            })
        );

        const validRecords = summaryResults.filter(r => r !== null);
        const targetStock = validRecords.find(r => r.symbol === targetTicker);
        const peerStocks = validRecords.filter(r => r.symbol !== targetTicker);

        if (!targetStock || !targetStock.pe) {
            console.log(`❌ Target stock ${targetTicker} lacks a valid trailing P/E ratio. Comparison aborted.`);
            return;
        }

        const targetPE = targetStock.pe;
        console.log(`\n🎯 TARGET: ${targetStock.name} (${targetStock.symbol}) | Live P/E: ${targetPE.toFixed(2)}`);

        // 3. Dual-Layer Filter: Ensure lower P/E AND adequate 10-day average volume
        const filteredPeers = peerStocks.filter(peer => {
            const hasLowerPE = peer.pe !== null && peer.pe < targetPE;
            const isLiquid = peer.avgVolume >= MIN_VOLUME_THRESHOLD;
            return hasLowerPE && isLiquid;
        });

        console.log(`\n=================== LIQUID PEERS WITH LOWER P/E RATIOS ===================`);
        if (filteredPeers.length === 0) {
            console.log("ℹ️ No recommended peers match both your lower P/E and liquidity criteria.");
        } else {
            console.log(
                String("TICKER").padEnd(14) + 
                String("COMPANY NAME").padEnd(30) + 
                String("P/E").padEnd(10) + 
                String("LIVE VOL").padEnd(14) + 
                String("10-DAY AVG VOL")
            );
            console.log("----------------------------------------------------------------------------------");
            
            // Sort ascending by P/E ratio (value-first)
            filteredPeers.sort((a, b) => a.pe - b.pe).forEach(peer => {
                console.log(
                    peer.symbol.padEnd(14) + 
                    peer.name.substring(0, 27).padEnd(30) + 
                    peer.pe.toFixed(2).padEnd(10) + 
                    peer.volume.toLocaleString('en-IN').padEnd(14) + 
                    peer.avgVolume.toLocaleString('en-IN')
                );
            });
        }
        console.log("==================================================================================\n");

    } catch (error) {
        console.error(`❌ Liquidity evaluation loop failed:`, error.message);
    }
}

// Run analysis on Infosys (NSE)
findLiquidUndervaluedPeers('INFY.NS');

//=================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

// Filtering Thresholds
const MIN_VOLUME_THRESHOLD = 50000;

async function findLiquidGrowthPeers(targetTicker) {
    try {
        console.log(`1. Fetching peer recommendations for ${targetTicker}...`);
        const recommendations = await yahooFinance.recommendationsBySymbol(targetTicker);
        
        if (!recommendations || !recommendations.recommendedSymbols || recommendations.recommendedSymbols.length === 0) {
            console.log(`ℹ️ No peers found for ${targetTicker}.`);
            return;
        }

        const peerTickers = recommendations.recommendedSymbols.map(item => item.symbol);
        const allTickers = [targetTicker, ...peerTickers];

        console.log(`2. Fetching financial metrics for all ${allTickers.length} assets...`);
        
        const summaryResults = await Promise.all(
            allTickers.map(async (ticker) => {
                try {
                    // Include 'financialData' to fetch the revenueGrowth metric
                    const summary = await yahooFinance.quoteSummary(ticker, { 
                        modules: ['summaryDetail', 'price', 'financialData'] 
                    });
                    
                    return {
                        symbol: ticker,
                        name: summary.price?.shortName || 'Unknown',
                        pe: summary.summaryDetail?.trailingPE || null,
                        price: summary.summaryDetail?.regularMarketPrice || null,
                        avgVolume: summary.summaryDetail?.averageDailyVolume10Day || 0,
                        // revenueGrowth is returned as a fractional decimal (e.g., 0.125 for 12.5%)
                        revGrowth: summary.financialData?.revenueGrowth || null 
                    };
                } catch {
                    return null; 
                }
            })
        );

        const validRecords = summaryResults.filter(r => r !== null);
        const targetStock = validRecords.find(r => r.symbol === targetTicker);
        const peerStocks = validRecords.filter(r => r.symbol !== targetTicker);

        if (!targetStock || !targetStock.pe) {
            console.log(`❌ Target stock ${targetTicker} lacks a valid trailing P/E ratio. Evaluation aborted.`);
            return;
        }

        const targetPE = targetStock.pe;
        const targetGrowth = targetStock.revGrowth !== null ? `${(targetStock.revGrowth * 100).toFixed(2)}%` : 'N/A';
        console.log(`\n🎯 TARGET: ${targetStock.name} (${targetStock.symbol}) | P/E: ${targetPE.toFixed(2)} | YoY Rev Growth: ${targetGrowth}`);

        // 3. Multi-Layer Filter: Lower P/E AND Liquid AND Positive YoY Revenue Growth (> 0)
        const finalPeers = peerStocks.filter(peer => {
            const hasLowerPE = peer.pe !== null && peer.pe < targetPE;
            const isLiquid = peer.avgVolume >= MIN_VOLUME_THRESHOLD;
            const hasPositiveGrowth = peer.revGrowth !== null && peer.revGrowth > 0;
            return hasLowerPE && isLiquid && hasPositiveGrowth;
        });

        console.log(`\n=================== LIQUID GROWING PEERS WITH LOWER P/E RATIOS ===================`);
        if (finalPeers.length === 0) {
            console.log("ℹ️ No recommended peers match all criteria (lower P/E, liquid, and positive YoY growth).");
        } else {
            console.log(
                String("TICKER").padEnd(14) + 
                String("COMPANY NAME").padEnd(30) + 
                String("P/E").padEnd(10) + 
                String("YoY REV GROWTH").padEnd(16) + 
                String("10-DAY AVG VOL")
            );
            console.log("-----------------------------------------------------------------------------------------");
            
            // Sort ascending by P/E ratio (cheapest valuation first)
            finalPeers.sort((a, b) => a.pe - b.pe).forEach(peer => {
                const growthPercentage = `${(peer.revGrowth * 100).toFixed(2)}%`;
                console.log(
                    peer.symbol.padEnd(14) + 
                    peer.name.substring(0, 27).padEnd(30) + 
                    peer.pe.toFixed(2).padEnd(10) + 
                    growthPercentage.padEnd(16) + 
                    peer.avgVolume.toLocaleString('en-IN')
                );
            });
        }
        console.log("=========================================================================================\n");

    } catch (error) {
        console.error(`❌ Multi-layer filtration pipeline failed:`, error.message);
    }
}

// Run analysis on Infosys (NSE)
findLiquidGrowthPeers('INFY.NS');

//===================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function evaluateStockRisk(ticker) {
    try {
        console.log(`Extracting objective risk metrics for ${ticker}...`);

        const summary = await yahooFinance.quoteSummary(ticker, { 
            modules: ['summaryDetail', 'defaultKeyStatistics', 'price'] 
        });

        const name = summary.price?.shortName || 'Unknown';
        const beta = summary.summaryDetail?.beta || null;
        const pegRatio = summary.defaultKeyStatistics?.pegRatio || null;
        const currentPrice = summary.summaryDetail?.regularMarketPrice || null;

        console.log(`\n=================== RISK ANALYSIS REPORT ===================`);
        console.log(`Company Name   : ${name} (${ticker})`);
        console.log(`Current Price  : ₹${currentPrice?.toFixed(2)}`);
        console.log(`------------------------------------------------------------`);

        // 1. Evaluate Volatility via Beta
        if (beta !== null) {
            console.log(`Beta Score     : ${beta.toFixed(2)}`);
            if (beta > 1) {
                console.log(`⚠️ High Volatility: This stock moves faster than the broader market.`);
            } else if (beta < 1 && beta > 0) {
                console.log(`🛡️ Low Volatility: Historically more stable than the broader market.`);
            } else {
                console.log(`🔄 Inverse Correlation: Moves opposite to the general market trend.`);
            }
        } else {
            console.log(`Beta Score     : Data Unavailable`);
        }

        console.log(`------------------------------------------------------------`);

        // 2. Evaluate Value vs Growth via PEG Ratio
        if (pegRatio !== null) {
            console.log(`PEG Ratio      : ${pegRatio.toFixed(2)}`);
            if (pegRatio < 1 && pegRatio > 0) {
                console.log(`📈 Undervalued: The stock's growth rate outpaces its current P/E premium.`);
            } else {
                console.log(`📉 Premium Pricing: The stock price heavily factors in future growth.`);
            }
        } else {
            console.log(`PEG Ratio      : Data Unavailable`);
        }
        
        console.log(`============================================================\n`);

    } catch (error) {
        console.error(`❌ Failed to fetch risk matrix:`, error.message);
    }
}

// Run the evaluation pipeline on an equity
evaluateStockRisk('RELIANCE.NS');


//================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function calculatePricingBands(ticker) {
    try {
        console.log(`Extracting 52-week pricing boundaries for: ${ticker}...`);

        // Request summary metrics containing tracking boundaries
        const summary = await yahooFinance.quoteSummary(ticker, { 
            modules: ['summaryDetail', 'price'] 
        });

        const data = summary.summaryDetail;
        const name = summary.price?.shortName || 'Unknown';

        const currentPrice = data?.regularMarketPrice || null;
        const high52W = data?.fiftyTwoWeekHigh || null;
        const low52W = data?.fiftyTwoWeekLow || null;

        if (!currentPrice || !high52W || !low52W) {
            console.log(`⚠️ Pricing limits missing or restricted for ${ticker}.`);
            return;
        }

        // 1. Calculate the relative position on a scale of 0% to 100%
        const ceilingProximity = ((currentPrice - low52W) / (high52W - low52W)) * 100;

        // 2. Calculate the direct percentage markdown from the highest peak
        const markdownFromPeak = ((high52W - currentPrice) / high52W) * 100;

        console.log(`\n=================== 52-WEEK PRICING BANDS ===================`);
        console.log(`Asset Entity        : ${name} (${ticker})`);
        console.log(`Current Live Price  : ₹${currentPrice.toFixed(2)}`);
        console.log(`-------------------------------------------------------------`);
        console.log(`52-Week Low Floor   : ₹${low52W.toFixed(2)}`);
        console.log(`52-Week High Roof   : ₹${high52W.toFixed(2)}`);
        console.log(`-------------------------------------------------------------`);
        console.log(`Band Position Scale : ${ceilingProximity.toFixed(2)}%`);
        console.log(`Distance from Peak  : -${markdownFromPeak.toFixed(2)}%`);
        console.log(`-------------------------------------------------------------`);

        // 3. Output structural contextual triggers
        if (ceilingProximity >= 90) {
            console.log(`🔥 Alert: Trading near its yearly ceiling. Momentum is strong.`);
        } else if (ceilingProximity <= 15) {
            console.log(`🛍️ Alert: Trading near its yearly floor. Value or turnaround territory.`);
        } else {
            console.log(`↔️ Market Context: Consolidating inside its neutral yearly range.`);
        }
        console.log(`=============================================================\n`);

    } catch (error) {
        console.error(`❌ Failed to resolve pricing bands:`, error.message);
    }
}

// Track pricing channel metrics for Reliance Industries on NSE
calculatePricingBands('WENDT.NS');

//========================================

const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

async function findBigInvestors(ticker) {
    try {
        console.log(`Scanning shareholding registry to identify major investors for: ${ticker}...`);

        // Request insiderHolders to expose prominent individual registries
        const queryOptions = {
            modules: ['insiderHolders', 'price']
        };

        
        const globalHolders = await yahooFinance.quoteSummary('RELIANCE.NS', { modules: ['institutionOwnership'] });
        console.log(globalHolders.institutionOwnership.ownershipList);

        const summary = await yahooFinance.quoteSummary(ticker, queryOptions);
        const investorsList = summary.insiderHolders?.holders;
        const companyName = summary.price?.shortName || 'Unknown Company';

        if (!investorsList || investorsList.length === 0) {
            console.log(`ℹ️ No prominent big individual investor or insider records returned for ${ticker}.`);
            return;
        }

        console.log(`\n=================== KEY INDIVIDUAL INVESTORS: ${companyName} (${ticker}) ===================`);
        console.log(
            String("INVESTOR NAME").padEnd(35) + 
            String("SHARES HELD").padEnd(16) + 
            String("STAKE (%)").padEnd(14) + 
            String("REPORT DATE")
        );
        console.log("-------------------------------------------------------------------------------------------------");

        investorsList.forEach(investor => {
            const name = investor.name || 'Undisclosed Identity';
            const sharesCount = investor.position ? investor.position.toLocaleString('en-IN') : 'N/A';
            
            // Convert fractional decimal to standard readable percentage
            const percentageStake = investor.countAndAsOfDate?.value 
                ? `${(investor.countAndAsOfDate.value * 100).toFixed(2)}%` 
                : 'N/A';
                
            const transactionDate = investor.latestTransDate 
                ? new Date(investor.latestTransDate).toLocaleDateString() 
                : 'N/A';

            console.log(
                name.substring(0, 32).padEnd(35) + 
                sharesCount.padEnd(16) + 
                percentageStake.padEnd(14) + 
                transactionDate
            );
        });


        console.log("=================================================================================================\n");

    } catch (error) {
        console.error(`❌ Failed to retrieve big investor logs:`, error.message);
    }
}

// Fetch superstar individual holders or promoters for Tata Consultancy Services
findBigInvestors('WENDT.NS');

//=====================================

const { downloads } = require('nse-bse-api');

async function streamEodMarketSheet() {
    try {
        console.log("Connecting to NSE public file archives...");

        // FIX: Dynamically import the ESM package inside your async workflow
        const { downloads } = await import('nse-bse-api');

        // Fetching Bhavcopy data
        const rawCsvData = await downloads.getBhavCopy("12-06-2026");

        if (!rawCsvData) {
            console.log("ℹ️ Report not released yet or the exchange was closed on this date.");
            return;
        }

        console.log("\n=================== LIVE NSE BHAVCOPY STREAM ===================");
        const rows = rawCsvData.split('\n');

        rows.slice(0, 15).forEach((row, index) => {
            if (row.trim() === "") return;
            if (index === 0) {
                console.log(`HEADER ROW: ${row}`);
                console.log("----------------------------------------------------------------");
            } else {
                console.log(`Row #${index}: ${row}`);
            }
        });

    } catch (error) {
        console.error("❌ Failed to stream data sheet:", error.message);
    }
}

streamEodMarketSheet();

//=====================================


// pollinations.ai text based prompt and text based answer
// async function test(){
//   const response = await fetch(
//   "https://gen.pollinations.ai/text/what is sachin tendulkars sons age ?model=openai",
//   { headers: { Authorization: "Bearer sk_7u12pDcu6Ge6x4HblrwX4AJejQWg9IoK" } },
// );
// console.log(await response.text());
// }
// test()

//=========================







