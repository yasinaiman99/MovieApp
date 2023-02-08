using System;

namespace PearsonCorrelationCoefficient
{
	class Program
	{
		static void Main(string[] args)
		{
			double[] data1 = { 1, 2, 3, 4, 5 };
			double[] data2 = { 5, 4, 3, 2, 1 };

			double mean1 = Mean(data1);
			double mean2 = Mean(data2);
			double stdDev1 = StandardDeviation(data1, mean1);
			double stdDev2 = StandardDeviation(data2, mean2);
			double covariance = Covariance(data1, mean1, data2, mean2);

			double pearsonCorrelationCoefficient = covariance / (stdDev1 * stdDev2);

			Console.WriteLine("Pearson Correlation Coefficient: " + pearsonCorrelationCoefficient);
			Console.ReadLine();
		}

		static double Mean(double[] data)
		{
			double sum = 0;
			for (int i = 0; i < data.Length; i++)
			{
				sum += data[i];
			}
			return sum / data.Length;
		}

		static double StandardDeviation(double[] data, double mean)
		{
			double sumOfSquaredDifferences = 0;
			for (int i = 0; i < data.Length; i++)
			{
				double difference = data[i] - mean;
				sumOfSquaredDifferences += difference * difference;
			}
			return Math.Sqrt(sumOfSquaredDifferences / data.Length);
		}

		static double Covariance(double[] data1, double mean1, double[] data2, double mean2)
		{
			double sumOfProductOfDifferences = 0;
			for (int i = 0; i < data1.Length; i++)
			{
				sumOfProductOfDifferences += (data1[i] - mean1) * (data2[i] - mean2);
			}
			return sumOfProductOfDifferences / data1.Length;
		}
	}
}